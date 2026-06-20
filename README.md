# 🚀 My personal portofolio website

A modern, responsive personal portfolio website built with **React**, **TypeScript**, **Tailwind
CSS**, and **Feature-Sliced Design (FSD)**.

This website showcases my projects, experience, technical skills, and blog posts while following a
clean and scalable architecture.

Deployed and hosted using **GitHub Pages**.

## ✨ Features

- 📱 **Responsive Design**  
  Works smoothly on desktop, tablet, and mobile devices.

- 🎨 **Modern UI**  
  Clean interface with smooth animations and scrolling.

- 📄 **Portfolio Sections**  
  Includes About, Experience, Projects, Blog, and Contact sections.

- 📝 **Blog System**  
  Supports Markdown-based blogs with easy content management.

- 🌐 **Multi-Language Support**  
  Centralized translation system for managing multiple languages.

- 🧩 **FSD Architecture**  
  Built with Feature-Sliced Design for better organization, scalability, and maintainability.

## 🏗 Architecture

This project uses **Feature-Sliced Design (FSD)** to keep the code organized, easy to understand,
and scalable.

```text
src/
├── app/          # Application setup
├── pages/        # Website pages
├── widgets/      # Large page sections
├── features/     # User actions and features
├── entities/     # Main data and business logic
└── shared/       # Reusable components and utilities
```

### Layer Purpose

| Layer    | Description                               |
| -------- | ----------------------------------------- |
| app      | Application configuration and providers   |
| pages    | Complete website pages                    |
| widgets  | Reusable page sections                    |
| features | User interactions and functionality       |
| entities | Core data models                          |
| shared   | Common components, helpers, and utilities |

### Why FSD?

- 📦 Keeps code organized
- 🔍 Makes files easier to find
- 🚀 Simplifies adding new features
- 🛠 Improves maintenance
- 📈 Supports project growth

## 🚀 Getting Started

```bash
git clone https://github.com/dhaboav/dhaboav.github.io.git
cd dhaboav.github.io
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## 📦 Build & Deploy

```bash
npm run build     # Production build
npm run preview   # Preview build locally
npm run deploy    # Deploy to GitHub Pages
```

## ✏️ Customization

- `src/shared/config/authorName.ts` → Update your name
- `src/entities/blog/model/data.ts` → Manage blogs, tags, and publish dates
- `src/entities/experience/model/data.ts` → Manage work experiences, internships, and activities
- `src/entities/project/model/data.ts` → Manage projects, descriptions, repositories, and demo links
- `src/shared/lib/i18n/locales/` → Manage translations and multilingual content

> Restart the development server if changes are not reflected automatically.

## 📄 License

This project is available under the **MIT License**.

⭐ If you find this project interesting, feel free to give it a star.

🐛 Found a bug or have a suggestion? Please open a **GitHub Issue** with details about the problem
or improvement.

💡 Contributions, feedback, and ideas are always welcome.
