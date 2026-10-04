# 🚀 My Portfolio Website

A modern, responsive personal portfolio built with **React**, **TypeScript**, and **TailwindCSS**. Hosted on **GitHub Pages**.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile.
- **Modern UI**: Clean, scalable interface with smooth transitions.
- **Portfolio Sections**: About, Experience, Projects, Blog, and Contact.
- **Markdown Blog**: Easy-to-manage content system with markdown.
- **Multi-Language Support**: Built-in localization architecture.
- **Dev Containers**: Pre-configured containerized development environment.

## 🏗 Architecture

```bash
src/
├── app/      # Application setup & providers
├── modules/  # Feature domains (UI components, pages, & local logic per feature)
└── shared/   # Global resources (Universal UI components, i18n, & global utilities)
```

## 🚀 Getting Started

#### Option A: Local Enviroment

```bash
git clone https://github.com/dhaboav/dhaboav.github.io.git
cd dhaboav.github.io
pnpm install
pnpm dev
```

#### Option B: Dev Containers (Recommended)

If you use VS Code with the **Dev Containers** extension:

1. Open the repository in VS Code.
2. Press `Ctrl/Cmd + Shift + P` and select **Dev Containers: Reopen in Container**.

Open `http://localhost:5173` in your browser.

## 📦 Build & Deploy

```bash
pnpm build      # Production build
pnpm preview    # Local preview
pnpm run deploy # Deploy to GitHub Pages
```

## ✏️ Customization

- `data/`            → Manage data, blogs, and app content.
- `src/shared/i18n/` → Manage translations and localization.
- `.devcontainer/`   → Configure development environment settings.

> Restart the development server if changes do not reflect automatically.

## 📄 License

MIT License. Contributions, issues, and feature requests are welcome!
