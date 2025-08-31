# FS Website

This is the official website for the Fachschaft (student council) built with Astro and Starlight. The website provides information for current students and prospective students in both German and English.

## 🛠️ Technology Stack

- **Framework**: [Astro](https://docs.astro.build) with [Starlight theme](https://starlight.astro.build/)
- **Blog**: [Starlight Blog plugin](https://starlight-blog-docs.vercel.app/getting-started/)
- **Languages**: Supports both German and English content
- **Deployment**: Automatically deployed from the main branch on GitHub

## 📋 Prerequisites

- Node.js and NPM (installation guide: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

## 📝 Content Organization

### Wiki Pages
- All wiki pages should be organized in `src/content/docs/`
- **Both German and English versions** should be created for each page
- German content goes in `src/content/docs/de/`
- English content goes in `src/content/docs/en/`

### Images and Assets
- Images should be organized in `src/assets/`
- Images can be embedded in Markdown with relative links
- Static assets (favicons, etc.) go in the `public/` directory

### Site Configuration
- **Sidebar entries, menu entries, theme settings** are managed in `astro.config.mjs`
- Content structure and schema are defined in `src/content.config.ts`

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
