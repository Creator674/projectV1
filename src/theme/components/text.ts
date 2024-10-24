import { defineStyleConfig } from '@chakra-ui/react';

export const textTheme = defineStyleConfig({
  defaultProps: { size: 'md' },
  baseStyle: {},
  sizes: {
    md: {
      fontSize: { base: 'md', lg: 'xs' },
    },
    lg: {
      fontSize: { base: 'md', lg: 'sm' },
    },
  },
});
