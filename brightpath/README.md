# BrightPath business website

A simple responsive consulting website built with HTML, CSS and TypeScript. All branding and packages are fictional demonstration content.

## View immediately
Open `index.html` in your browser. The compiled JavaScript is included, so no installation is necessary.

## Edit the TypeScript
Install Node.js and npm. In this folder run:

```sh
npm install
npm run check
npm run build
```

Then reopen `index.html`. For a local server, with Python 3 installed:

```sh
npm start
```

Visit http://localhost:5173.

## Features
- Responsive mobile navigation
- Service buttons select the relevant inquiry topic
- One-time/monthly sample pricing toggle
- Expandable FAQ
- Validated inquiry form with email draft and copy functionality
- Accessible labels, focus styles and reduced motion support

## Customize
- Edit `index.html` for brand name, copy, services and prices.
- Edit `styles.css` for colors and layout.
- Replace `hello@example.com` in `src/main.ts` with your email and run `npm run build`.
- No external fonts, image downloads, API keys or runtime dependencies.

## Form behavior
The form prepares a local draft; it does not send email or save submissions. The email link opens the visitor’s configured mail app. Clipboard access depends on browser permissions, with manual copy fallback. A production inbox integration requires your own backend or form service. No payments, accounts or analytics are included.
