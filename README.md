# personal-site

Source for [kraigstrong.com](https://kraigstrong.com): an interactive résumé that leads with my
career and backs it up with the games and learning apps I build and ship through my studio, BrightBench.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static production build
npm run lint
npm run typecheck
```

## Editing content

Everything on the page comes from `src/content/`:

| File | What's in it |
| --- | --- |
| `profile.ts` | Name, title, links, summary, "At a glance" numbers, education, extras. `asOf` sets the month that "Present" durations are measured to; bump it when you update content. |
| `experience.ts` | One chapter per company: roles (promotions stack), intro line, metrics and bullets in display order (the first four show before "Show more") |
| `projects.ts` | BrightBench, its Play and Learn apps, other projects, and status labels |

`/llms.txt`, the schema.org `Person` data, the sitemap and the social card are generated from
the same files, so they never drift from the page.

## Assets

`public/projects/` holds copies taken from the project repos and the Time Tutor App Store listing.
The Math Reef preview was re-encoded to 960 px wide for the web.

## Deploying

The site is fully static. To deploy, import the repo into Vercel and add `kraigstrong.com` as the
domain.
