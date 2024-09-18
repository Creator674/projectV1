import { defineStyleConfig } from '@chakra-ui/react';

export const headingTheme = defineStyleConfig({
  defaultProps: {},
  baseStyle: {},
  variants: {
    h1: {
      fontSize: ['4xl'],
      fontWeight: 'bold',
    },
    h2: {
      fontSize: { base: '3xl', lg: 'xl' },
      fontWeight: 'bold',
    },
    h3: {
      fontSize: { base: '2xl', lg: 'md' },
      fontWeight: 'normal',
    },
    h4: {
      fontSize: { base: 'lg', lg: 'sm' },
      fontWeight: 'normal',
    },
  },
  sizes: {
    xl: {
      fontSize: '4xl',
    },
    lg: {
      fontSize: '3xl',
    },
    md: {
      fontSize: '2xl',
    },
  },
});
