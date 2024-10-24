import { defineStyleConfig } from '@chakra-ui/react';

import { headingTheme } from './heading';

import { fonts } from '../fonts';

export const linkTheme = defineStyleConfig({
  defaultProps: { variant: 'contactUs' },
  baseStyle: {
    ...headingTheme.variants?.h4,
  },
  variants: {
    contactUs: {
      fontFamily: fonts.heading,
      color: 'neutral.0',
      textDecoration: 'underline',
      textDecorationThickness: '1px',
      textUnderlineOffset: '2px',
    },
  },
});
