# Masters Union Nation — Dalal Street Design System

## Product and target

Masters Union Nation is a cinematic MUN conference site. The redesigned target is only the Dalal Street committee overlay entered from the existing Global Boardroom map. The map and all other screens remain unchanged.

## Visual direction

Create an original retro pixel-art financial district with a strong isometric 3D illusion. It may evoke classic top-down adventure games, but must not reproduce Pokémon characters, logos, maps, buildings, or proprietary assets. Buildings reference Indian capital markets: Bombay Stock Exchange, SEBI/market regulation, and an institutional trading floor.

## Palette

- Night navy: `#07131b`
- Deep road: `#151b20`
- Slate facade: `#65737b`
- Limestone: `#c9bfa4`
- Brass gold: `#e5b765`
- Terminal green: `#91f3a7`
- Warm window: `#ffd47a`
- Paper white: `#f5ecd8`

## Typography

- Use DM Mono for all pixel-game UI, labels, prompts, and ticker information.
- Use Manrope only for the large committee title when necessary to remain coherent with the parent site.
- Render pixel lettering with hard shadows, no blur.

## Geometry and depth

- Build the scene on an isometric ground plane using CSS 3D transforms and perspective.
- Pixelated hard edges, stepped shadows, repeating tile textures, window grids, curbs, zebra crossings, lamps, and a bull sculpture.
- Buildings need distinct silhouettes, visible roofs, front and side planes, doorway hit zones, and depth-consistent shadows.
- UI HUD stays screen-space and does not tilt with the world.

## Character and movement

- Original business-delegate sprite assembled from CSS pixel blocks.
- Continuous requestAnimationFrame movement using delta time, velocity acceleration, friction, normalized diagonals, and collision clamping.
- Held WASD/arrow keys, press-and-hold touch controls, and click/tap destination walking.
- Character direction and walking animation respond continuously. Camera/world parallax follows subtly.
- Entering a building triggers a pixel iris transition, registration form, then Razorpay with UPI QR option.

## Accessibility and responsive behavior

- Buttons remain keyboard accessible and include clear labels.
- Touch controls are large enough for mobile.
- Reduced motion disables bobbing/parallax while preserving navigation.
- Mobile preserves the complete scene with scaled isometric world and fixed HUD/controls.

## Invariants

- Do not alter the Global Boardroom map.
- Do not alter committee data, music, registration fields, delegate ID, payment verification, or Vercel functions.
- Do not use external copyrighted game assets.
