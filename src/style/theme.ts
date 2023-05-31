export const theme = {
  colors: {
    background: '#061F3D',
    primary: '#2762e3',
    text: '#F0F0F0',
    textLight: '#82838C'
  },
  fontSizes: {
    xs: 0.4,
    sm: 0.8,
    md: 1,
    lg: 1.4,
    xl: 2,
    xxl: 2.4
  },
  fonts: {
    h1: {
      size: 'xxl',
      lineHeight: 1.6
    },
    h2: {
      size: 'xl',
      lineHeight: 1.6
    },
    h3: {
      size: 'lg',
      lineHeight: 1.4
    },
    h4: {
      size: 'md',
      lineHeight: 1.4
    },
    h5: {
      size: 'sm',
      lineHeight: 1.4
    },
    h6: {
      size: 'xs',
      lineHeight: 1.4
    },
    p: {
      size: 'md',
      lineHeight: 1.2
    },
    span: {
      size: 'sm',
      lineHeight: 1.2
    }
  },
  radii: [0.4, 0.8, 1, 2, 10],
  spacings: {
    sm: 0.4,
    md: 0.6,
    lg: 0.8
  },
  sizes: {
    sm: 24,
    md: 32,
    lg: 40
  },
  fontWeight: {
    bold: 700,
    mediumBold: 500,
    thin: 300
  }
} as const

export type Theme = typeof theme
export type ThemeColor = keyof Theme['colors']
export type ThemeSize = keyof Theme['fontSizes']
export type ThemeSpacing = keyof Theme['spacings']
export type FontVariant = keyof Theme['fonts']
export type ThemeWidth = keyof Theme['sizes']
export type FontWeight = keyof Theme['fontWeight']
