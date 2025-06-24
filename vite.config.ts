import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/secure-wifi-qr/',  // 👈 chemin correct pour GitHub Pages
  plugins: [react()],
});
