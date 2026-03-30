# Afripacific Cleaning Services

A clean, responsive Next.js 14 website for **Afripacific** — a Nairobi-based cleaning company.

---

## Installation

### 1. Install dependencies
```bash
cd afripacific
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## Deploy to Vercel (Easiest)

```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live in ~1 minute.

## Deploy to Cloudflare Pages

### Option A — Dashboard
1. Push code to GitHub
2. Cloudflare Dashboard → Pages → Connect to Git
3. Build command: `npm run build`
4. Output directory: `.next`
5. Node version env var: `NODE_VERSION = 18`

### Option B — CLI
```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy .next
```

---

## Pages

| Route       | Page        |
|-------------|-------------|
| `/`         | Home        |
| `/services` | Services    |
| `/about`    | About Us    |
| `/contact`  | Contact     |

---

## Customise

| What              | Where                                    |
|-------------------|------------------------------------------|
| Company name/logo | `src/components/Navbar.tsx`, `Footer.tsx`|
| Phone / email     | `src/components/Footer.tsx`, `contact/page.tsx` |
| Service list      | `src/app/services/page.tsx`              |
| Team members      | `src/app/about/page.tsx`                 |
| Colors            | `tailwind.config.ts` → `primary`         |

---

## Tech Stack
- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS v3**
- **Lucide React** — icons
- **Unsplash** — placeholder images