# ENERGEX — Website Revamp

Redesign of [energex.co.in](https://energex.co.in/) for ENERGEX, a solar and lighting infrastructure company in Bihar.

- **Layout** follows the structure of mccarthy.com: utility bar + sticky header with mega menus, photo-mosaic hero,
  mixed-weight headlines, stat band, featured-work carousel, image tiles, full-bleed CTA band, and a dark footer.
- **Theme** comes from the ENERGEX logo: deep forest green → leaf/lime green on white (tokens in `src/app/globals.css`).
- **Content** is taken from the existing site; the full crawl is in [`docs/energex-site-content.md`](docs/energex-site-content.md).
  All copy and contact details live in `src/lib/site.ts`.

## Pages

`/` · `/about` · `/our-work` · `/solutions` · `/services` · `/pm-surya-ghar` · `/execution-partner` · `/contact` ·
`/privacy-policy` · `/terms-conditions`

The appointment form has no backend: submitting it opens WhatsApp (+91 70707 00465) with the details pre-filled.

## Development

```bash
npm install
npm run dev
```

Built with Next.js 15 (App Router), React 19 and Tailwind CSS 4. All pages are statically generated (`npm run build`).

## Deployment (Ubuntu VM on Google Cloud)

Code lives in `/opt/energex`, Next.js runs on `127.0.0.1:3100` under systemd (`deploy/energex.service`), and nginx
(`deploy/nginx/energex.conf`, server_name `energex.aditya.sbs`) proxies port 80 to it.

First time, copy `deploy/setup.sh` to the VM and run `sudo bash setup.sh`. It installs nginx + Node 22, adds swap on
small VMs, creates an `energex` system user, prints a deploy key to add at GitHub → Settings → Deploy keys, clones
into `/opt/energex`, builds, and enables the service and nginx site.

- Update: `sudo /opt/energex/deploy/update.sh`
- HTTPS: `sudo certbot --nginx -d energex.aditya.sbs`
- Logs: `journalctl -u energex -f`, `/var/log/nginx/energex.*.log`
