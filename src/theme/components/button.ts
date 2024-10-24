import { defineStyleConfig } from '@chakra-ui/react';

import { fonts } from '../fonts';

export const buttonTheme = defineStyleConfig({
  defaultProps: { variant: 'submit' },
  variants: {
    submit: {
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
      minWidth: '20px',
      padding: 0,
      border: 'none',
      borderRadius: '5px',
      backgroundColor: 'primary.300',
    },
    text: {
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
      minWidth: 'fit-content',
      padding: '8px 16px',
      backgroundColor: 'none',
    },
  },
});
