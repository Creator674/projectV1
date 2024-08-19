import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/anatomy';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(alertAnatomy.keys);

export const alertTheme = defineMultiStyleConfig({
  baseStyle: {
    container: {}
  },
  variants: {
    success: {
      container: {
        color: 'black',
        bg: 'greenLight'
      }
    },
    error: {
      container: {
        color: 'black',
        bg: 'redLight'
      }
    },
    info: {
      container: {
        color: 'white',
        bg: 'blue'
      }
    },
    warning: {
      container: {
        color: 'white',
        bg: 'yellow'
      }
    }
  }
});
