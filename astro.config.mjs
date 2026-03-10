// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lologaby.github.io',
  base: '/Dot0x',
  vite: {
    plugins: [tailwindcss()]
  }
});