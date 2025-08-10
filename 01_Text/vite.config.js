import { defineConfig } from 'vite';
import restart from 'vite-plugin-restart';

export default defineConfig({
  root: 'src', // entry point (src/index.html)
  publicDir: '../static', // static assets served as-is
  server: {
    host: true,
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env),
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [
    restart({
      restart: ['../static/**'], // watch static file changes
    }),
  ],
});