import { defineTheme, palette } from 'pinceau'
import colors from 'tailwindcss/colors'
import nuxtThemeTokens from '@nuxt-themes/tokens/tokens'

// See Typography config on https://github.com/nuxt-themes/typography/blob/main/tokens.config.ts
export default defineTheme({
  color: {
    primary: nuxtThemeTokens.color?.teal || palette('teal'),
  },
  typography: {
    color: {
      primary: nuxtThemeTokens.color?.teal,
      secondary: colors.gray,
    },
  },
  prose: {
    code: {
      block: {
        backgroundColor: {
          light: colors.gray['50'],
          dark: colors.gray['900'],
        },
      },
      inline: {
        backgroundColor: {
          light: colors.gray['100'],
          dark: colors.gray['900'],
        },
      },
    },
  },
})
