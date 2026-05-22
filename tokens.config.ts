import { defineTheme } from 'pinceau'
import colors from 'tailwindcss/colors'

// See Typography config on https://github.com/nuxt-themes/typography/blob/main/tokens.config.ts
export default defineTheme({
  color: {
    black: '#0c0c0d',
    white: '#ffffff',
    gray: colors.gray,
    blue: colors.blue,
    green: colors.green,
    yellow: colors.yellow,
    red: colors.red,
    primary: colors.teal,
  },
  space: {
    4: '1rem',
    6: '1.5rem',
  },
  typography: {
    color: {
      primary: colors.teal,
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
