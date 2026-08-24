# PT Karunia Panca Gemilang (KPG) — Official Corporate Website

Official corporate website for **PT Karunia Panca Gemilang**, an Indonesian enterprise operating in **Wood Processing**, **Veneer Production**, **Plywood Trading**, and **Heavy Cargo Transportation Services**.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, fully optimized for seamless deployment on **Vercel**.

---

## 🎨 Visual Identity & Brand Guidelines

- **Primary Green (Deep Forest Green)**: `#173B25`
- **Secondary Green (Natural Green)**: `#31583A`
- **Premium Gold (Accent)**: `#B88932`
- **Backgrounds**: Pure White (`#FFFFFF`) & Off-White (`#F7F7F4`)
- **Theme**: Light corporate elegance (70% white/off-white, 20% forest green, 10% gold accent)
- **Typography**: Cormorant Garamond / DM Sans (Headings) & Inter (Body)

---

## 🚀 Quick Start & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build & Test
```bash
npm run build
npm run start
```

---

## ☁️ Deployment on Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the project into your **Vercel Dashboard**.
3. Vercel will automatically detect Next.js and apply the correct build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Set Environment Variables in Vercel:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com`
   - `CONTACT_TO_EMAIL`: `kpgemilang@gmail.com`
   - `RESEND_API_KEY`: *(Optional transactional email service key)*
5. Click **Deploy**.

---

## 🌐 Customizing Domain in Vercel

1. In Vercel Project Dashboard, navigate to **Settings** > **Domains**.
2. Add your custom domain (e.g. `karuniapancagemilang.co.id` or `kpg.co.id`).
3. Add the required DNS records (A Record `@` to `76.76.21.21` and CNAME `www` to `cname.vercel-dns.com`).
4. Update `NEXT_PUBLIC_SITE_URL` in environment variables with your production custom domain.

---

## ✏️ Customizing Company Information & Brand Assets

- **Company Info & Text**: Edit `/src/config/company.ts` to update address, phone, email, and description placeholders.
- **Logo**: Uses official logo assets in `/public/brand/kpg-logo.png`.
- **Images**: Add custom operational photography into `/public/images/` and reference them in `/src/config/company.ts` or component files.

---

## 📄 License & Legal

© 2026 PT Karunia Panca Gemilang. All rights reserved.
