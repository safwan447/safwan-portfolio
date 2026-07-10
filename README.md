# Mohammed Safwan - Personal Portfolio

A modern, minimal, and responsive personal portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Designed to showcase my projects, experience, skills, achievements, and certifications while providing an elegant user experience with subtle animations.

> Inspired by Vercel's design philosophy — clean, minimal, and content-focused.

---

## Live Website

**Portfolio:** https://safwan-portfolio-89lczzfci-safwan447s-projects.vercel.app

---

## ✨ Features

- Modern and minimal UI
- Fully responsive across devices
- Dark & Light theme
- Smooth animations using Framer Motion
- Dynamic project pages
- Skills, experience, achievements & certifications
- Resume download
- SEO optimized
- Open Graph metadata
- Easy to maintain using data files
- Ready for Vercel deployment

---

## Tech Stack

### Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

### UI & Animations

- Framer Motion
- shadcn/ui
- Lucide React

### Deployment

- Vercel

---

## 📂 Project Structure

```text
portfolio/
│
├── public/
│   ├── images/
│   ├── projects/
│   ├── certificates/
│   └── resume/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── config/
│   ├── data/
│   ├── lib/
│   └── styles/
│
├── README.md
├── package.json
└── ...
```

---

## Running Locally

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/safwan-portfolio.git
```

Navigate into the project

```bash
cd safwan-portfolio
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

---

## 📝 Updating the Portfolio

The portfolio is designed to be **data-driven**, making updates simple without modifying UI components.

### ➜ Add a New Project

Edit:

```
src/data/projects.ts
```

Add a new project object and, if applicable, place its thumbnail inside:

```
public/images/projects/
```

---

### ➜ Update Skills

Edit:

```
src/data/skills.ts
```

---

### ➜ Update Experience

Edit:

```
src/data/experience.ts
```

---

### ➜ Update Education

Edit:

```
src/data/education.ts
```

---

### ➜ Add Certifications

Edit:

```
src/data/certifications.ts
```

Certificate images can be placed in:

```
public/certificates/
```

---

### ➜ Add Achievements

Edit:

```
src/data/achievements.ts
```

You can also attach images and external links if supported.

---

### ➜ Update Resume

Replace:

```
public/resume/Safwan_Resume.pdf
```

---

### ➜ Change Profile Picture

Replace:

```
public/images/profile.jpeg
```

---

### ➜ Update Personal Information

Edit:

```
src/config/site.ts
```

From here you can update:

- Name
- Email
- Social links
- Navigation
- SEO metadata
- Tagline
- Contact information

---

## Deployment

This portfolio is optimized for **Vercel**.

After pushing changes to GitHub, Vercel automatically rebuilds and deploys the latest version.

To deploy manually:

```bash
vercel
```

---

## Future Improvements

- Blog section
- Project filtering
- Analytics
- Contact form backend
- Custom domain
- More case studies
- Certificate gallery
- Hackathon gallery

---

## 🤝 Connect With Me

- GitHub: https://github.com/safwan447
- LinkedIn: https://linkedin.com/in/safwan-n
- Email: safwan.work19@gmail.com

---

If you found inspiration from this project, a ⭐ on the repository is always appreciated.

---

Made with ❤️ by **Mohammed Safwan**