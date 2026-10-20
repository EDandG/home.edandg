# home.edandg.com — ED&G™ website

Static site (HTML/CSS/JS, no back end, no build step). Theme lifted from the Pharmacy Portal (navy / teal / honey, ED&G™ lockup, animated triangle backdrop).

## Files
| File | Purpose |
|---|---|
| `index.html` | Home page (Products, TP Ready, Advanced Development, How we work, About, Contact) |
| `privacy.html` | Website privacy notice (no cookies, no tracking) |
| `404.html` | GitHub Pages "not found" page |
| `styles.css` / `site.js` | Theme + light/dark toggle, scroll reveal |
| `favicon.svg` | Tab icon |
| `CNAME` | Tells GitHub Pages the custom domain is `home.edandg.com` |
| `.nojekyll` | Serve files as-is |

Contact address used throughout: `support@edandg.com`.

## Publish
1. Create a new repo under the `edandg` account, e.g. `edandg-website`.
2. Upload these files to the repo root (keep `CNAME` and `.nojekyll`).
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)`.
4. Custom domain: `home.edandg.com` → Save. Tick **Enforce HTTPS** once the certificate is issued (can take up to an hour after DNS resolves).

## DNS (Squarespace → Domains → edandg.com → DNS)
Add one record:

| Host | Type | Value |
|---|---|---|
| `home` | CNAME | `edandg.github.io` |

Nothing else changes: the apex, `www`, your other app subdomains and the Google Workspace mail records are untouched.

Recommended: **Settings → Pages → Verify a domain** on the `edandg` account (adds a TXT record) so nobody else can claim the domain on GitHub.

Optional: to send visitors who type `edandg.com` to the site, add a domain forward in Squarespace from `edandg.com` to `https://home.edandg.com`.
