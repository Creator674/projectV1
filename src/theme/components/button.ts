import { defineStyleConfig } from '@chakra-ui/react';

export const buttonTheme = defineStyleConfig({
  defaultProps: { size: '' },
  baseStyle: {},
  variants: {
    submit: {
      width: '100%',
      fontSize: {
        base: '16px'
      },
      lineHeight: {
        base: '18px'
      },
      padding: {
        base: '4px 8px'
      },
      letterSpacing: '0.03em',
      color: 'black',
      justifyContent: 'space-between',
      borderColor: 'black',
      borderRadius: '2px',
      backgroundColor: 'grayLight'
    }
  }
});
