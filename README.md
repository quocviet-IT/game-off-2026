# Game Off 2026

My entry for [GitHub Game Off 2026](https://itch.io/jam/game-off-2026), a
month-long game jam that runs from November 1 to December 1, 2026. The theme is
announced on November 1, so for now this is an empty, deployable shell: a
placeholder menu, game and game-over screen.

**Play:** https://quocviet-it.github.io/game-off-2026/

## Run locally

Needs Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # production build in dist/
npm run typecheck  # TypeScript only, no output
```

## Project layout

| Path | What it holds |
|---|---|
| `src/game/main.ts` | Game configuration (size, scaling, scene list) |
| `src/game/scenes/` | `Boot → Preloader → MainMenu → Game → GameOver` |
| `src/game/placeholder.ts` | Temporary title-and-hint screen used by every scene |
| `public/assets/` | Images, audio and fonts the Preloader loads (create it when needed) |
| `vite/` | Dev and production build settings |

## Deploy

Every push to `main` runs the **Build and deploy** workflow: it typechecks,
builds, and publishes `dist/` to GitHub Pages. Pull requests are typechecked and
built but not published.

The same run uploads the build as an artifact named **html5-build**. To submit on
itch.io, download it from the workflow run, keep it as a `.zip` with
`index.html` at the top level, and upload it as an HTML5 game.

## Jam checklist

- [ ] November 1: read the theme on the [jam page](https://itch.io/jam/game-off-2026)
- [ ] Pick a name; update the `<title>` in `index.html` and this README
- [ ] Replace the placeholder scenes with the game
- [ ] Credit any third-party art, audio or code below
- [ ] Create the itch.io page and upload the `html5-build` zip
- [ ] Submit to Game Off 2026 before **December 1, 13:37 PST**
- [ ] Keep this repository public

## Built with

- [Phaser](https://phaser.io/) 4 and TypeScript
- [Vite](https://vite.dev/)
- Started from the official [phaserjs/template-vite-ts](https://github.com/phaserjs/template-vite-ts) template

## Credits

No third-party assets yet.

## License

[MIT](LICENSE)
