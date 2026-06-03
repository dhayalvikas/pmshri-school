# PM SHRI Shahid Shakru Khan GSSS Mangluna

Official website of PM SHRI Shahid Shakru Khan Govt. Senior Secondary School, Mangluna, Nechhwa, Sikar, Rajasthan.

## Tech Stack
- **React 18** + **Vite 5**
- CSS Modules (no Tailwind dependency)
- Fully responsive — mobile first

## Project Structure
```
src/
  assets/images/     ← All school photos (extracted from PDF)
  components/
    Navbar.jsx/.css
    Hero.jsx/.css
    About.jsx/.css
    Facilities.jsx/.css
    Activities.jsx/.css
    Gallery.jsx/.css
    Contact.jsx/.css
    Footer.jsx/.css
  App.jsx
  main.jsx
  index.css
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

## Deploy to Vercel (Recommended)
1. Push to GitHub
2. Go to vercel.com → Import project
3. Select the repo → Deploy (zero config needed)

## Deploy to Netlify
1. Push to GitHub
2. Go to netlify.com → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
