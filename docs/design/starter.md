# Game Off 2026 starter

This repository starts as an empty, deployable shell for GitHub Game Off 2026
(November 1 – December 1, 2026). The jam rules allow templates, but most of the
work has to happen during the jam, so nothing here is gameplay: it is the
toolchain, a placeholder scene flow and the deployment path.

## What is in the starter

- **Engine:** Phaser 4 with TypeScript, bundled by Vite, taken from the official
  `phaserjs/template-vite-ts` template (MIT).
- **Scenes:** `Boot → Preloader → MainMenu → Game → GameOver`. Each scene shows
  placeholder text only; a click or tap moves to the next one. No art, audio or
  game logic.
- **Removed from the template:** `log.js` and the `dev`/`build` scripts that
  called it (they sent an anonymous usage ping to a third-party host on every
  run), the build banner plugin, and the template's sample images.
- **Scripts:** `npm run dev` (local server on port 8080), `npm run build`
  (production build in `dist/`), `npm run typecheck` (`tsc --noEmit`).
- **Paths:** Vite uses `base: './'`, so the same build works on GitHub Pages
  (under `/game-off-2026/`) and when uploaded to itch.io as an HTML5 zip.

## Continuous integration and deployment

One GitHub Actions workflow, `.github/workflows/deploy.yml`:

- **Pull requests:** install, typecheck, build. Nothing is published.
- **Pushes to `main`:** install, typecheck, build, then publish `dist/` to
  GitHub Pages at `https://quocviet-it.github.io/game-off-2026/`. The same job
  uploads `dist/` as a workflow artifact named `html5-build`, ready to zip and
  upload to itch.io.

GitHub Pages is set to build from GitHub Actions.

## Repository

- `quocviet-IT/game-off-2026`, public, default branch `main`.
- License: MIT, keeping the Phaser Studio notice for the template code.
- README: how to run and build, the play link, and a checklist for the jam
  (read the theme on November 1, name the game, submit on itch.io before
  December 1 at 13:37 PST).

## Done when

- `npm run typecheck` and `npm run build` pass locally.
- The dev server shows the placeholder scenes and they advance on click.
- The workflow run on `main` succeeds and the Pages URL loads the same scenes.

## Out of scope until the theme is announced

Game idea, art, audio, controls, scoring, saving, and any other gameplay.
