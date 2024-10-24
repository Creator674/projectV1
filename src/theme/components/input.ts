import { defineStyleConfig } from '@chakra-ui/react';

import { headingTheme } from './heading';

import { fonts } from '../fonts';

export const inputTheme = defineStyleConfig({
  defaultProps: { variant: 'signUp' },
  variants: {
    signUp: {
      field: {
        border: 'none',
        borderBottom: '1px',
        borderColor: 'neutral.400',
        borderRadius: 0,
        bgColor: 'transparent',
        padding: '8px 0',
        color: 'neutral.0',
        _placeholder: {
          ...headingTheme.variants?.h4,
          fontFamily: fonts.heading,
          color: 'neutral.500',
        },
      },
    },
  },
});
