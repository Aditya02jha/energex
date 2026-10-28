#!/usr/bin/env bash
# One-time setup of the ENERGEX website on an Ubuntu VM (Google Cloud Compute Engine).
#
#   curl -fsSLO https://.../setup.sh   (or scp it over)
#   sudo bash setup.sh
#
# Result: code in /opt/energex, Next.js on 127.0.0.1:3100 via systemd (energex.service),
# nginx site /etc/nginx/sites-available/energex proxying to it. Safe to re-run.
set -euo pipefail

REPO="${REPO:-git@github.com:Aditya02jha/energex.git}"
APP_DIR=/opt/energex
APP_USER=energex
APP_HOME=/var/lib/energex
NODE_MAJOR=22

[[ $EUID -eq 0 ]] || { echo "Run with sudo." >&2; exit 1; }
as_app() { sudo -u "$APP_USER" -H "$@"; }

echo "› Installing nginx, git, curl"
apt-get update -y
apt-get install -y nginx git curl ca-certificates

if ! command -v node >/dev/null || [[ "$(node -v | sed 's/^v\([0-9]*\).*/\1/')" -lt 20 ]]; then
  echo "› Installing Node.js $NODE_MAJOR"
  curl -fsSL "https://deb.nodesource.com/setup_${NODE_MAJOR}.x" | bash -
  apt-get install -y nodejs
fi
echo "  node $(node -v), npm $(npm -v)"

# Small VMs (e2-micro/small) run out of memory during `next build` without swap.
if [[ $(free -m | awk '/^Mem:/{print $2}') -lt 2048 && -z "$(swapon --show)" ]]; then
  echo "› Adding 2G swap file"
  fallocate -l 2G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile
  grep -q '^/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
fi

if ! id "$APP_USER" >/dev/null 2>&1; then
  echo "› Creating system user $APP_USER"
  useradd --system --create-home --home-dir "$APP_HOME" --shell /usr/sbin/nologin "$APP_USER"
fi

# The repo is private: give the VM a read-only deploy key.
if [[ "$REPO" == git@* ]]; then
  KEY="$APP_HOME/.ssh/id_ed25519"
  if [[ ! -f "$KEY" ]]; then
    as_app mkdir -p "$APP_HOME/.ssh"
    as_app ssh-keygen -q -t ed25519 -N "" -C "energex-vm-deploy" -f "$KEY"
  fi
  as_app bash -c "ssh-keyscan -t ed25519 github.com >> ~/.ssh/known_hosts 2>/dev/null; sort -u -o ~/.ssh/known_hosts ~/.ssh/known_hosts"
  if ! as_app git ls-remote "$REPO" >/dev/null 2>&1; then
    echo
    echo "Add this public key as a read-only Deploy key at"
    echo "  https://github.com/Aditya02jha/energex/settings/keys/new"
    echo
    cat "$KEY.pub"
    echo
    read -rp "Press Enter once the key is added… "
    as_app git ls-remote "$REPO" >/dev/null || { echo "Still cannot reach $REPO" >&2; exit 1; }
  fi
fi

if [[ ! -d "$APP_DIR/.git" ]]; then
  echo "› Cloning into $APP_DIR"
  mkdir -p "$APP_DIR"
  chown "$APP_USER:$APP_USER" "$APP_DIR"
  as_app git clone "$REPO" "$APP_DIR"
fi

echo "› Installing systemd service"
install -m 644 "$APP_DIR/deploy/energex.service" /etc/systemd/system/energex.service
systemctl daemon-reload
systemctl enable energex

echo "› Installing nginx site"
install -m 644 "$APP_DIR/deploy/nginx/energex.conf" /etc/nginx/sites-available/energex
ln -sfn /etc/nginx/sites-available/energex /etc/nginx/sites-enabled/energex
# The stock default site would otherwise answer requests to the bare IP.
rm -f /etc/nginx/sites-enabled/default

bash "$APP_DIR/deploy/update.sh"

nginx -t
systemctl reload nginx

IP=$(curl -fsS -H "Metadata-Flavor: Google" \
  "http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip" 2>/dev/null || hostname -I | awk '{print $1}')
cat <<EOF

✓ ENERGEX is running.
  Test:    http://$IP/   (needs "Allow HTTP traffic" on the VM / firewall rule for tcp:80)
  Domain:  point the energex.aditya.sbs A record to $IP, then:
           sudo apt-get install -y certbot python3-certbot-nginx
           sudo certbot --nginx -d energex.aditya.sbs
  Update:  sudo $APP_DIR/deploy/update.sh
  Logs:    journalctl -u energex -f    |    /var/log/nginx/energex.*.log
EOF
