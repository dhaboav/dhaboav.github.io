# 🚀 My Portfolio Website

A modern, responsive personal portfolio built with **React**, **TypeScript**, **TailwindCSS**, and **Feature-Sliced Design (FSD)**. Hosted on **GitHub Pages**.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile.
- **Modern UI**: Clean, scalable interface with smooth transitions.
- **Portfolio Sections**: About, Experience, Projects, Blog, and Contact.
- **Markdown Blog**: Easy-to-manage content system with markdown.
- **Multi-Language Support**: Built-in localization architecture.
- **FSD Architecture**: Scalable and maintainable project structure.
- **Dev Containers**: Pre-configured containerized development environment.

## 🏗 Architecture

```text
src/
├── app/          # Application setup & providers
├── data/         # Portfolio & blog data
├── pages/        # Page components
├── widgets/      # Large composite sections
├── features/     # User interactions
└── shared/       # Reusable components & utils
```

## 🚀 Getting Started

#### Option A: Local Enviroment

```bash
git clone https://github.com/dhaboav/dhaboav.github.io.git
cd dhaboav.github.io
npm install
npm run dev
```

#### Option B: Dev Containers (Recommended)

If you use VS Code with the **Dev Containers** extension:

1. Open the repository in VS Code.
2. Press `Ctrl/Cmd + Shift + P` and select **Dev Containers: Reopen in Container**.

Open `http://localhost:5173` in your browser.

## 📦 Build & Deploy

```bash
npm run build     # Production build
npm run preview   # Local preview
npm run deploy    # Deploy to GitHub Pages
```

## ✏️ Customization

- `src/data/` → Manage data, blogs, and app content.
- `src/shared/lib/i18n/` → Manage translations and localization.
- `.devcontainer/` → Configure development environment settings.

> Restart the development server if changes do not reflect automatically.

## 📄 License

MIT License. Contributions, issues, and feature requests are welcome!
