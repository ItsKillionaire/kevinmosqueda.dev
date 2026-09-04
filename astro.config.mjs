import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kevinmosqueda.dev',
  base: '/',
  integrations: [tailwind()],
});