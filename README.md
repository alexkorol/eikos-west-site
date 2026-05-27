# Eikos West Website Prototype

Static GitHub Pages prototype for the July 1, 2026 transition from Gateway Auto to Eikos West.

## Pages

- `index.html` - home
- `services/index.html` - auto repair and maintenance
- `interlock/index.html` - ignition interlock landing page
- `about/index.html` - rebrand story and warranty promise
- `contact/index.html` - contact, hours, and map

## Publish With GitHub Pages

This folder is already a local Git repository. Create an empty repository on GitHub without initializing a README, `.gitignore`, or license, then run the following in PowerShell from this folder:

```powershell
git branch -M main
git add .
git commit -m "Build Eikos West website prototype"
git remote add origin https://github.com/YOUR-USERNAME/eikos-west-site.git
git push -u origin main
```

On GitHub, open the repository and choose **Settings > Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.

Future updates publish with:

```powershell
git add .
git commit -m "Describe the site update"
git push
```

There is no build step. The site uses relative links so it can publish from a GitHub project-pages path, and `.nojekyll` keeps deployment purely static.

Official references:

- [Creating a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
- [Adding locally hosted code to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Confirm Before Launch

- Replace `(425) 555-0100` when the owner provides the confirmed phone number.
- Add the actual online booking destination on the contact page.
- Add approved, verified Google review quotations and the updated profile link to the home-page launch panel.
- Confirm the supplied review aggregate, certifications, warranty details, hours, and service claims.
- Confirm that the stated interlock appointment expectation of 1.5-3 hours matches shop scheduling practice.
- Add approved shop photography if desired; the current hero is intentionally a brand-forward graphic treatment.
