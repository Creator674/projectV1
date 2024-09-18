import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { formErrorAnatomy } from '@chakra-ui/anatomy';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(formErrorAnatomy.keys);

export const formErrorMessageTheme = defineMultiStyleConfig({
  variants: {
    inputError: {
      text: {
        margin: 0,
        fontSize: { base: '12px', md: '14px', xl: '16px' },
        lineHeight: { base: '16px', md: '18px', xl: '24px' },
        color: 'redLight',
      },
    },
  },
});
