import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { selectAnatomy } from '@chakra-ui/anatomy';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(selectAnatomy.keys);

export const selectTheme = defineMultiStyleConfig({
  defaultProps: { size: '' },
  variants: {
    objectCreate: {
      field: {
        fontSize: { base: '14px' },
        lineHeight: { base: '16px' },
        color: 'black',
        width: '100%',
        height: '26px',
        padding: { base: '4px 8px' },
        border: { base: '1px' },
        borderColor: { base: 'black' },
        borderRadius: '4px',
        backgroundColor: 'white',
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
  },
});
