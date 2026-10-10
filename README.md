 # Digital Invitation — Setup

Plain HTML/CSS/JS, no build step. Drop this repo on GitHub Pages and it works.

## Folder structure

```
index.html        → frame 1 (the play card)
frame2.html        → frame 2 (placeholder for now)
assets/
  css/style.css    → all styling
  js/script.js     → play button interaction
  images/          → your Canva exports go here
  audio/           → music clip goes here, once decided
```

## Decisions locked in so far

- **Canvas size:** every frame is designed in Canva at **1080 × 1920 px** (9:16,
  matches Canva's "Instagram Story" preset). Keep every frame this exact size
  so they feel like one consistent flipbook.
- **Layering:** the play button is exported **separately** from the
  background, on its own transparent canvas at the same 1080×1920 size, so it
  lines up automatically when the code stacks it on top of the background —
  no manual positioning needed as long as both files are the same canvas size.
- **Interaction:** tap the play button → it swaps to the pause icon → after a
  beat, the page fades and moves to `frame2.html`.

## Images needed for frame 1 (drop into `assets/images/`)

| filename            | what it is                                                   |
|---------------------|---------------------------------------------------------------|
| `frame1-bg.png`     | everything except the play button — doodles, player card, text, progress bar |
| `play-button.png`   | just the black circle + play triangle, transparent canvas, same 1080×1920 size, positioned exactly where it sits on the background |
| `pause-button.png`  | same circle with a pause icon instead, same size/position     |

Until real exports are dropped in, these three filenames are wired up but the
folder is empty — the page will show broken image icons, that's expected.

## Deploying on GitHub Pages

1. Push this folder to a GitHub repo (any name).
2. Repo → **Settings → Pages** → under "Build and deployment", choose
   **Deploy from a branch** → branch `main`, folder `/ (root)` → Save.
3. GitHub gives you a URL like `https://yourname.github.io/repo-name/` —
   that's the link you share.

## Still to plan

- Frame 2 content and layout.
- Final page content.
- Whether/how audio ties into the play button.
