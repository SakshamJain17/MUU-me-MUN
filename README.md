# Masters Union Nation

Website for the Masters Union Nation (MUN) conference, 28 & 29 November 2026, Masters' Union School of Business, Gurugram.

Static cinematic experience (HTML, CSS, vanilla JS) with no build step or dependencies.

## Experience

- Delegate identity scan and access transition
- Interactive Global Boardroom map with eight committee destinations
- Drag-to-rotate 3D map depth, raised nodes and responsive pointer parallax
- Committee-specific dossiers, palettes, motion and procedural audio cues
- Application flow with a configurable backend endpoint
- Live Virtual Delegate ID Studio with photo upload, finishes, payment-gated PNG export and native sharing
- Responsive and reduced-motion layouts

## Run locally

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Deployment

The GitHub repository is connected to the Vercel project `muu-me-mun`. Pushes to `main` deploy to production automatically; pushes to other branches create preview deployments.

## Configure

In `assets/js/main.js`:
- `APPLY_ENDPOINT` - backend URL the application form POSTs JSON to.

### Razorpay payments

The ID preview is created first. Download and sharing remain locked until Razorpay Checkout succeeds and the server verifies the payment signature.

The integration uses two Vercel Functions:

- `POST /api/create-order` creates a server-authoritative INR order.
- `POST /api/verify-payment` verifies Razorpay's HMAC signature before unlocking the ID.

Copy the variable names from `.env.example` into Vercel project settings:

- `RAZORPAY_KEY_ID` — Razorpay public key identifier.
- `RAZORPAY_KEY_SECRET` — server-only secret; never expose it in browser code.
- `REGISTRATION_FEE_INR` — registration price in rupees.

Run the full payment flow locally with `vercel dev`; a plain static HTTP server cannot execute the API functions. Use Razorpay test credentials until the complete flow has been validated, then replace them with live credentials in the Vercel Production environment.

### Audio

IPL and Dalal Street use the supplied recordings in `assets/audio/`. They continue until the visitor stops them, exits the committee dossier, disables global sound, selects another musical committee, or the file ends. Additional approved recordings can be configured through `LICENSED_AUDIO` in `assets/js/main.js`. Confirm web-use permission before production deployment.
