# Masters Union Nation — Geographic Map and Live Venues

## Scope

Preserve the existing conference identity, committee data, registration fields, ID studio, Razorpay flow, and committee audio. Correct the map and extend the existing walk-to-register interaction to Dalal Street, IPL, and AIPPM.

## World map

- Use an equirectangular world map and calculate pin positions from real latitude and longitude.
- Retain the cinematic navy/ocean palette and committee-specific pin colors.
- Add a subtle latitude/longitude grid and restrained pointer tilt.
- Separate labels for the tightly clustered Mumbai, Bengaluru, New Delhi, and Kurukshetra pins.
- Keep routes, hover dossier preview, keyboard focus, and the bottom committee rail.

## Live venues

- Dalal Street: realistic South Mumbai/BSE-inspired dusk environment.
- IPL: floodlit Chinnaswamy-inspired cricket stadium, field-level and live.
- AIPPM: full Parliament-inspired building and ceremonial forecourt.
- Render each venue as real WebGL geometry rather than a flat photographic backdrop.
- Use a third-person 360° orbit camera: drag to look in any direction, scroll to zoom, and move relative to the camera with WASD, arrow keys, or touch controls.
- Include collision boundaries, soft shadows, atmospheric fog, architectural lighting, and an illuminated entrance beacon.
- Proximity reveals the existing interaction prompt, then opens the correct committee registration and payment flow.

## UI treatment

Use the existing navy, limestone, gold, and terminal-green palette. HUDs use dark translucent glass, fine gold borders, Manrope display typography, Playfair italic emphasis, and DM Mono live readouts. Avoid pixel-art effects inside the three realistic venues.

## Responsive and accessibility

All controls remain labeled and keyboard accessible. Preserve Escape-to-exit, sound controls, mobile movement controls, high contrast, and reduced-motion usability.
