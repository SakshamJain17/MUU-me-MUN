# Routes

This is a single-page buildless application served from `/index.html`.

- `/` → `index.html`
  - Delegate access overlay
  - Global Boardroom map (`#boardroom`)
  - Prize section (`#prizes`)
  - Applications (`#applications`)
  - Contact (`#contact`)
  - Committee dossier overlay
  - Dalal Street interactive overlay
  - Registration and delegate ID/payment dialogs

Vercel Functions:

- `POST /api/create-order` → `api/create-order.js`
- `POST /api/verify-payment` → `api/verify-payment.js`
