// https://docs.astro.build/de/reference/configuration-reference/

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mkcert from 'vite-plugin-mkcert';



export default defineConfig({
  output: 'static',

   i18n: {
    locales: ["no", "en", "de"],
    defaultLocale: "de",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  compressHTML: true,
  trailingSlash: 'always',
  base: '/',
  vite: {
    plugins: [
      mkcert(),
    ],
    server: {

    }
  },
  server: {
    host: true,
    https: true
  },
  build: {
    sourcemap: (process.env.npm_lifecycle_event === 'dev') ? true : false,
  },
  site: '',
  integrations: [sitemap()],
});
