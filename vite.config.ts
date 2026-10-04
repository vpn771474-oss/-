import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Resolve base path dynamically for GitHub Pages, custom domains, and local development
const getBasePath = (): string => {
  // If explicitly overridden via environment variable (e.g. custom domain or CI configuration)
  if (process.env.BASE_PATH) {
    const customBase = process.env.BASE_PATH;
    return customBase.endsWith('/') ? customBase : `${customBase}/`;
  }

  // When building in GitHub Actions CI
  if (process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1] || '';
    // If the repository name itself ends with .github.io (user or organization page), the base path is '/'
    if (repo.toLowerCase().endsWith('.github.io')) {
      return '/';
    }
    // Standard project repository: https://<username>.github.io/<repository-name>/
    return `/${repo}/`;
  }

  // Local development, preview, or default root
  return '/';
};

// Plugin to ensure GitHub Pages serves client routes properly and disables Jekyll processing
const gitHubPagesHelperPlugin = (): Plugin => ({
  name: 'github-pages-helper',
  closeBundle() {
    const distDir = path.resolve(__dirname, 'dist');
    const indexHtml = path.join(distDir, 'index.html');
    const notFoundHtml = path.join(distDir, '404.html');
    const noJekyll = path.join(distDir, '.nojekyll');

    if (fs.existsSync(distDir)) {
      if (fs.existsSync(indexHtml) && !fs.existsSync(notFoundHtml)) {
        fs.copyFileSync(indexHtml, notFoundHtml);
      }
      fs.writeFileSync(noJekyll, '');
    }
  },
});

export default defineConfig(() => {
  return {
    base: getBasePath(),
    plugins: [react(), tailwindcss(), gitHubPagesHelperPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
