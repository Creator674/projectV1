import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from '@/theme/breakpoints';
import { global } from '@/theme/global';
import { SEMANTIC_COLORS as colors } from '@/theme/colors';
import {
  buttonTheme,
  textAreaTheme,
  inputTheme,
  formErrorMessageTheme,
  alertTheme,
  selectTheme
} from '@/theme/components';

export const customTheme = extendTheme({
  breakpoints,
  colors,
  fontSizes: {},
  fonts: {
    OldStandartRegular: 'Old Standart Regular TT, sans-serif',
    OldStandartItalic: 'Old Standart Italic TT, sans-serif',
    OldStandartBold: 'Old Standart Bold TT, sans-serif',
  },
  components: {
    Button: buttonTheme,
    Textarea: textAreaTheme,
    Input: inputTheme,
    FormError: formErrorMessageTheme,
    Alert: alertTheme,
    Select: selectTheme
  },
  styles: global
});
