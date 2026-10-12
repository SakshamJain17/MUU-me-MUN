# Page Dependency Trees

## `/` Global Boardroom and overlays

Entry: `index.html`

Dependencies:

- `assets/css/style.css`
- `assets/js/main.js`
- `assets/images/world-atlas-india-focus.png`
- `assets/images/world-atlas-india-expanded.png`
- `assets/images/world-atlas-night.png`
- `assets/audio/ipl-theme-licensed.mp3`
- `assets/audio/scam-1992-theme-licensed.mp3`
- `api/create-order.js`
- `api/verify-payment.js`

The Dalal Street target is the `#dalalStreet` overlay in `index.html`, styled by the final Dalal Street block in `assets/css/style.css` and controlled by the `streetPosition`/`walkToBuilding` functions in `assets/js/main.js`.
