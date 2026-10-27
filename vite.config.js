import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function serveResumePlugin() {
  return {
    name: 'serve-resume-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0].toLowerCase() : '';
        if (url === '/resume.pdf' || url === '/resume') {
          const filePath = path.resolve(__dirname, 'public/Resume.pdf');
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline; filename="Kalaivanan_K_Resume.pdf"');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  let web3Key = (
    env.VITE_WEB3FORMS_ACCESS_KEY ||
    env.WEB3FORMS_ACCESS_KEY ||
    process.env.VITE_WEB3FORMS_ACCESS_KEY ||
    process.env.WEB3FORMS_ACCESS_KEY ||
    ''
  ).replace(/^['"]|['"]$/g, '').trim();

  if (web3Key.includes('=')) {
    web3Key = web3Key.split('=').pop().replace(/^['"]|['"]$/g, '').trim();
  }

  return {
    root: '.',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    envPrefix: ['VITE_', 'WEB3FORMS_'],
    define: {
      'import.meta.env.VITE_WEB3FORMS_ACCESS_KEY': JSON.stringify(web3Key),
    },
    plugins: [
      react(),
      tailwindcss(),
      serveResumePlugin(),
    ],
  };
});
