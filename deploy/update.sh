#!/usr/bin/env bash
# Pull the latest code into /opt/energex, rebuild, and restart the site.
#   sudo /opt/energex/deploy/update.sh
set -euo pipefail

APP_DIR=/opt/energex
APP_USER=energex
as_app() { sudo -u "$APP_USER" -H "$@"; }

[[ $EUID -eq 0 ]] || { echo "Run with sudo." >&2; exit 1; }

echo "› Pulling latest code"
as_app git -C "$APP_DIR" pull --ff-only

echo "› Installing dependencies"
as_app bash -c "cd $APP_DIR && npm ci --no-audit --no-fund"

echo "› Building"
as_app bash -c "cd $APP_DIR && NEXT_TELEMETRY_DISABLED=1 npm run build"

echo "› Restarting service"
systemctl restart energex
sleep 2
systemctl --no-pager --lines=0 status energex
curl -fsS -o /dev/null -w "✓ App answered HTTP %{http_code} on 127.0.0.1:3100\n" http://127.0.0.1:3100/
