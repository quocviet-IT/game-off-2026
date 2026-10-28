# Game Off 2026 — idea plan

The theme is announced on November 1, 2026, so no concept is chosen yet. This
page fixes everything that does not depend on the theme, so that picking the
idea on November 1 takes about an hour instead of days. Nothing here is built
before the jam starts.

## Constraints

| | |
|---|---|
| Time | About 1 hour every evening, 25–30 hours in total |
| Genre | Arcade, reflex-based, one screen, score-chasing |
| Art | Drawn in code: shapes, glow lines, particles, screen shake (neon style). No sprites to draw |
| Length | A run lasts 1–5 minutes; the whole game is learnable in 10 |
| Platforms | Desktop browser and phone (touch), inside the itch.io frame |
| Scope rule | One core mechanic, polished. Cut features before cutting polish |

## Mechanic bank

Each entry works with the art style and fits the time budget. On November 1,
bend one of them to the theme rather than inventing from zero.

| # | Mechanic | Controls | Fail state | Practice: past theme it fits |
|---|---|---|---|---|
| 1 | **One-button orbit** — a dot circles a centre; tap to reverse or jump to another ring, dodging obstacles on the rings | 1 button / tap | Touch an obstacle | *Moonshot* (2020): hop orbit to orbit up to the moon |
| 2 | **Wave survival** — shock waves expand from the centre; slip through the gaps; speed rises over time | Mouse / WASD / drag | Hit a wave | *Waves* (2025): the waves are the level, each with its own pattern |
| 3 | **Sonar reveal** — enemies are invisible; a sonar pulse shows them briefly but also reveals you to them | Move + 1 button | Caught by an enemy | *Secrets* (2024): what is hidden only shows when you dare to look |
| 4 | **Grow and shrink** — absorb smaller shapes to grow; bigger is stronger but slower and easier to hit | Mouse / drag | Absorbed by something bigger | *Scale* (2023): size is the whole mechanic |
| 5 | **Two at once** — the left hand steers the top shape, the right hand the bottom one | Two keys / two thumbs | Either shape crashes | *Hybrid* (2018): two halves of one character |
| 6 | **Rewind ghosts** — on death, rewind 3 seconds, but your previous run keeps playing as a ghost that blocks you | Move + 1 button | Run out of rewinds | *Throwback* (2017): your past comes back to haunt you |
| 7 | **Breaking game** — the higher the score, the more the game glitches: inverted controls, torn frames, drifting UI | Move | Hit a hazard | *Bug* (2021): the bug is the enemy |

Other past themes to practise on: *Leaps and bounds* (2019), *Cliché* (2022).

## November 1: pick the idea in one hour

1. **10 min — interpret.** Write ten readings of the theme: literal,
   metaphorical, and "what would this be as a mechanic?".
2. **20 min — match and score.** Pair each reading with a mechanic above (or a
   new one) and score 1–5 on three things:
   - *Theme* — would a judge see the theme within 10 seconds of play?
   - *Fun* — is the core action satisfying even with placeholder shapes?
   - *Fits 25 hours* — one screen, no level design, no story?
3. **30 min — one-page concept** for the winner:
   - Core loop in one sentence ("dodge X to collect Y while Z speeds up")
   - Controls on keyboard, mouse and touch
   - Fail state and how the score works
   - Difficulty curve: what changes every 30 seconds
   - Three juice items, e.g. screen shake on hit, particle bursts, slow motion
     on a near miss
   - The title and the tagline for itch.io

Put the concept in `docs/concept.md` and start building that evening.

## Four-week schedule (about 7 hours a week)

| Week | Dates | Goal | Done when |
|---|---|---|---|
| 1 | Nov 1–8 | **Playable core** | You can start, play, lose and see a score, with rough shapes |
| 2 | Nov 9–15 | **Feel and difficulty** | Juice items in; difficulty ramps; a run is fun for 2+ minutes |
| 3 | Nov 16–22 | **Audio, menus, phone** | Sound effects and music, a title and game-over screen, high score saved, touch controls work |
| 4 | Nov 23–28 | **Buffer and release** | itch.io page with screenshots and a GIF; submitted **by November 28**, three days before the December 1, 13:37 PST deadline |

Rules for every week:

- Push to `main` at the end of each evening so the Pages build always shows the
  latest version.
- If a week's goal slips, cut scope from the next week, not polish from the
  current one.
- Ask one or two people to play every Sunday and watch them without helping.

## Sources for audio and fonts (to credit in the README)

- Sound effects: [jsfxr](https://sfxr.me/) generates retro sounds in the browser
- Music and effects: CC0 packs on [Kenney](https://kenney.nl/assets) and
  [OpenGameArt](https://opengameart.org/)
- Fonts: [Google Fonts](https://fonts.google.com/) (OFL licence)
