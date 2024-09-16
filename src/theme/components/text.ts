import { defineStyleConfig } from '@chakra-ui/react';

export const textTheme = defineStyleConfig({
  defaultProps: { size: 'md' },
  baseStyle: {},
  sizes: {
    md: {
      fontSize: 'md',
    },
  },
});
