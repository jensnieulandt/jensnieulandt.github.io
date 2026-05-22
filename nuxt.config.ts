import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-05-22',
  extends: [
    process.env.TYPOGRAPHY_THEME || '@nuxt-themes/typography',
    '@nuxt-themes/elements',
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-config-schema',
    ...(process.env.NODE_ENV === 'development' ? ['@nuxthq/studio'] : []),
  ],
  colorMode: {
    classSuffix: '',
  },
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      },
    },
  },
  sourcemap: {
    client: false,
    server: false,
  },
  nitro: {
    prerender: {
      ignore: [
        '/__studio.json',
        '/__pinceau_tokens_schema.json',
        '/__pinceau_tokens_config.json',
      ],
      routes: ['/sitemap.xml'],
    },
  },
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (
            warning.message?.includes('plugin pinceau-transforms') &&
            warning.message?.includes("didn't generate a sourcemap")
          ) {
            return
          }
          warn(warning)
        },
      },
    },
    esbuild: {
      logOverride: {
        'css-syntax-error': 'silent',
      },
    },
    resolve: {
      alias: [
        {
          find: /^pinceau$/,
          replacement: fileURLToPath(
            new URL('./shims/pinceau.ts', import.meta.url)
          ),
        },
      ],
    },
  },
})
