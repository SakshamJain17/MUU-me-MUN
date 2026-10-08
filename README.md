# Masters Union Nations

Website for the Masters Union Nations (MUN) conference, 28 & 29 November 2026, Masters' Union School of Business, Gurugram.

Static cinematic experience (HTML, CSS, vanilla JS) with no build step or dependencies.

## Experience

- Delegate identity scan and access transition
- Interactive Global Boardroom map with eight committee destinations
- Drag-to-rotate 3D map depth, raised nodes and responsive pointer parallax
- Committee-specific dossiers, palettes, motion and procedural audio cues
- Application flow with a configurable backend endpoint
- Live Virtual Delegate ID Studio with photo upload, finishes, PNG export and native sharing
- Responsive and reduced-motion layouts

## Run locally

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Configure

In `assets/js/main.js`:
- `APPLY_ENDPOINT` - backend URL the application form POSTs JSON to.

The repository currently contains no payment-provider or server credentials. The ID Studio is therefore unlocked after the local registration/application handoff in this prototype. Connect verified payment success to `openStudio()` before production launch.

### Audio

IPL and Dalal Street use the supplied recordings in `assets/audio/`. They continue until the visitor stops them, exits the committee dossier, disables global sound, selects another musical committee, or the file ends. Additional approved recordings can be configured through `LICENSED_AUDIO` in `assets/js/main.js`. Confirm web-use permission before production deployment.
