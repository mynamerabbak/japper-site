import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    locales: ['jp', 'fr', 'en', 'ar'],
    defaultLocale: 'jp',
    routing: "manual"
  },
  output: "static"
});
