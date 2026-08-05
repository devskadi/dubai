<div align="center">

# SPM Dubai

**S.P. Madrid's marketing site** — an animated, fully responsive Next.js site.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Motion](https://img.shields.io/badge/Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev)

</div>

---

## ✨ Overview

A single-page marketing site built to feel alive: a pinned, full-bleed video
hero and scroll-triggered entrance animations throughout. Every section is fully responsive from small phones up through large desktop
monitors, and animates into view once as the user scrolls past it.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** [Motion](https://motion.dev) (Framer Motion)
- **Icons:** [Lucide](https://lucide.dev) + [react-icons](https://react-icons.github.io/react-icons/)
- **Images:** `next/image` throughout for automatic optimization

---

## 🚀 Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
# or: yarn dev / pnpm dev / bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The
page auto-updates as you edit files inside `app/` and `components/`.

---

## ⚙️ Configuring the Contact Form

The contact form (`components/sections/contact.tsx`) and the navbar's "Get
Started" button (`components/sections/nav.tsx`) both send mail via a
`mailto:` link rather than a backend API — no email service or server route
required. Recipient addresses live as plain constants near the top of each
file:

```ts
const TO_EMAILS = ["sample@gmail.com"];
const CC_EMAILS = ["sample@gmail.com"];
const BCC_EMAILS = ["sample@gmail.com"];
```

Edit these arrays with real addresses before deploying.

> ⚠️ **These constants are duplicated in both `contact.tsx` and `nav.tsx`.**
> They aren't shared from a single source yet, so update *both* files when
> changing an address, or a future edit could silently update one and miss
> the other.

Because this approach relies on the visitor's own configured email client,
delivery isn't guaranteed for every user (e.g. no default mail app set up).
Swap in a real backend endpoint if guaranteed delivery becomes a requirement.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Motion Documentation](https://motion.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## ☁️ Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new), from the
creators of Next.js. See the
[Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)
for other options.

<div align="center">

---

Built for **S.P. Madrid**

</div>
