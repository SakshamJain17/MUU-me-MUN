# Extractable Components

## GlobalNavigation
- Source: `index.html` and `assets/css/style.css`
- Category: layout
- Description: Fixed Masters Union Nation wordmark and sound control.
- Extractable props: soundEnabled
- Hardcoded: wordmark, navigation labels, event styling

## RegistrationModal
- Source: `index.html`
- Category: basic
- Description: Delegate registration form shown after committee/building selection.
- Extractable props: committee, formTitle, selectedMarketBuilding
- Hardcoded: field labels and secure-submission note

## PaymentStudio
- Source: `index.html`
- Category: basic
- Description: Virtual ID canvas plus Razorpay payment action.
- Extractable props: paymentVerified, paymentAmount, committee
- Hardcoded: finish options and ID-canvas layout

## DalalStreetSimulation
- Source: `index.html`, `assets/css/style.css`, `assets/js/main.js`
- Category: basic
- Description: Full-screen interactive financial district with buildings, avatar movement, and registration triggers.
- Extractable props: selectedBuilding, movementState, soundEnabled
- Hardcoded: financial district buildings and ticker labels
