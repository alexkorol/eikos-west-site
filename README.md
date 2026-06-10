# Eikos West Website

Static GitHub Pages site for the July 1, 2026 transition from Gateway Auto Repair to Eikos West — auto repair and ignition interlock service in Mountlake Terrace, WA.

## Pages

- `index.html` — home, with launch banner and storefront illustration
- `services/index.html` — auto repair and maintenance
- `interlock/index.html` — ignition interlock landing page (includes FAQ structured data)
- `about/index.html` — rebrand story and repair guarantee messaging
- `crew/index.html` — team portraits and staff story framework
- `contact/index.html` — contact, hours, and map
- `404.html` — custom not-found page (GitHub Pages serves this automatically)

## Site Features

**SEO and sharing.** Every page carries a canonical URL, Open Graph / Twitter Card tags, and `AutoRepair` LocalBusiness JSON-LD (verified hours, both phone numbers, geo coordinates, service area, and `alternateName: Gateway Auto Repair` so search engines connect the old name to the new one). The interlock page adds `FAQPage` structured data from its five FAQs. `sitemap.xml` and `robots.txt` sit at the root. Social shares render `assets/brand/og-image.png` (1200×630).

**Launch banner switches itself.** The home-page banner counts down to opening day ("Opening in N days" → "tomorrow" → "today"). On and after July 1, 2026 it automatically becomes "Gateway Auto Repair is now Eikos West — Same shop. Same crew. New name." No edit needed on launch day. The date lives in one place: `LAUNCH` at the top of `assets/js/site.js`.

**Storefront illustration.** The home hero panel features a flat-geometric SVG of the brick-red building at 5601 244th St SW — it backs up the "Look for the brick-red storefront" copy with an actual picture of what to look for.

**Accessibility.** Skip-to-content link, focus-visible states, `aria-current` navigation, Escape-key and outside-click menu dismissal, and scroll animations that fully disable under `prefers-reduced-motion`.

**No build step, no dependencies.** Plain HTML/CSS/JS with relative links so it publishes from a GitHub project-pages path. `.nojekyll` keeps deployment purely static.

## Base URL

Absolute URLs (canonicals, Open Graph, JSON-LD, sitemap, robots, and the 404 page's asset paths) point to:

```
https://alexkorol.github.io/eikos-west-site
```

If the site moves to a custom domain, find-and-replace that string across `*.html`, `sitemap.xml`, and `robots.txt`, then set the new domain in **Settings > Pages > Custom domain**.

## Publish With GitHub Pages

This folder is already a local Git repository. Create an empty repository on GitHub without initializing a README, `.gitignore`, or license, then run the following in PowerShell from this folder:

```powershell
git branch -M main
git add .
git commit -m "Build Eikos West website"
git remote add origin https://github.com/alexkorol/eikos-west-site.git
git push -u origin main
```

On GitHub, open the repository and choose **Settings > Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.

Future updates publish with:

```powershell
git add .
git commit -m "Describe the site update"
git push
```

When you change `styles.css` or `site.js`, bump the `?v=` query string in the HTML `<head>` so visitors' browsers fetch the new files.

Official references:

- [Creating a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
- [Adding locally hosted code to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Confirm Before Launch

- Confirm whether the existing Gateway Auto shop phones `(425) 775-8501` and `(425) 672-3441` will carry over after the ownership transition.
- Add the actual online booking destination on the contact page.
- Add approved, verified Google review quotations and the updated profile link to the home-page launch panel.
- Replace the crew-page portrait and biography slots with approved team photos, names, roles, and stories.
- Confirm future Eikos West hours, guarantee terms, and any claims not carried directly from existing public listings.
- Confirm that the stated interlock appointment expectation of 1.5-3 hours matches shop scheduling practice.
- Add approved shop photography if desired; the current hero is intentionally a brand-forward graphic treatment.
