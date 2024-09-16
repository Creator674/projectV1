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
      fontSize: ['3xl'],
      fontWeight: 'bold',
    },
    h3: {
      fontSize: ['2xl'],
      fontWeight: 'normal',
    },
    h4: {
      fontSize: ['lg'],
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
