## Guestable – Next.js App (TS + Tailwind) for GitHub Pages

### Features
- Landing page with 3D buttons: Login, Register, Login as Guest
- Modal popups for Login/Register with info message
- Home page for guest with “Welcome” and engaging sections
- Gradient background on all pages, responsive, clean typography
- TypeScript, Tailwind CSS v4, SEO metadata, favicon
- Static export and GitHub Pages CI

### Local Development
```bash
npm install
npm run dev
```
Open http://localhost:3000.

### Build and Export
```bash
npm run build
```
Artifacts are exported to `out/`.

### Deploy to GitHub Pages (CI)
Pushing to `main` triggers the workflow at `.github/workflows/deploy.yml`.
It builds with `output: export` and publishes the static site to GitHub Pages.

If you want to test locally to a `gh-pages` branch:
```bash
npm run deploy
```

### Configuration
- `next.config.ts` sets `output: "export"` and configures `basePath`/`assetPrefix` automatically for Pages using repo name.
- Update `metadataBase` in `app/layout.tsx` with your site URL when known.

### Linting
```bash
npm run lint
```

### Notes
- All pages return 200 and the project builds before each task’s completion.
- Tailwind v4 “@import tailwindcss” and utility classes are used.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
