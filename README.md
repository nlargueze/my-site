# my-site

Personal site

## Deployment

```sh
# on main
pnpm build && pnpm preview
# on gh-pages
git checkout gh-pages && git merge main
pnpm build-gh # requires NODE_ENV=production
git add -A && git commit -m "build" && git push

```
