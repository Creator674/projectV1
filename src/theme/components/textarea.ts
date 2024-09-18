import { defineStyleConfig } from '@chakra-ui/react';

export const textAreaTheme = defineStyleConfig({
  defaultProps: { size: '' },
  baseStyle: {
    height: 'unset',
    fontWeight: { base: 400, md: 500 },
  },
  variants: {
    objectCreate: {
      minHeight: { base: '90px' },
      fontSize: { base: '14px' },
      lineHeight: { base: '16px' },
      color: 'clean',
      width: '100%',
      padding: { base: '4px 8px' },
      border: { base: '1px' },
      borderColor: { base: 'clean' },
      borderRadius: '4px',
      backgroundColor: 'blackMedium',
      _placeholder: {
        color: 'grayLight3',
        opacity: 0.8,
      },
      _focus: {},
      _invalid: {
        borderColor: 'redLight',
        _placeholder: {
          color: 'redLight',
        },
      },
    },
  },
});
