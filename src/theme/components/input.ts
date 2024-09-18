import { defineStyleConfig } from '@chakra-ui/react';

export const inputTheme = defineStyleConfig({
  defaultProps: { size: '' },
  baseStyle: {
    height: 'unset',
    fontWeight: { base: 400, md: 500 },
  },
  variants: {
    objectCreate: {
      field: {
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
        '&::-webkit-calendar-picker-indicator': {
          filter: 'invert(1)',
        },
        '&::-webkit-calendar-picker-indicator:hover': {
          cursor: 'pointer',
        },
      },
    },
    searchInput: {
      field: {
        position: 'relative',
        height: { base: '40px', xl: '50px' },
        fontFamily: 'underground',
        fontSize: { base: '16px', xl: '18px' },
        lineHeight: { base: '18px', xl: '21px' },
        color: 'black',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: '10px',
        background: 'white',
        _invalid: {
          borderColor: 'redLight',
        },
      },
    },
    hidden: {
      field: {
        width: '0px',
        height: '0px',
        display: 'none',
      },
    },
  },
});
