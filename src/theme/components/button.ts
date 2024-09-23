import { defineStyleConfig } from '@chakra-ui/react';

import { fonts } from '../fonts';

export const buttonTheme = defineStyleConfig({
  defaultProps: { variant: 'submit' },
  baseStyle: {},
  variants: {
    submit: {
      minWidth: '20px',
      width: '100%',
      height: '44px',
      fontSize: {
        base: '18px',
      },
      fontWeight: 500,
      fontFamily: fonts.button,
      color: 'neutral.0',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      border: 'none',
      borderRadius: '5px',
      backgroundColor: 'primary.300',
    },
  },
});
