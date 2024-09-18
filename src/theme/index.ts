import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from '@/theme/breakpoints';
import { global } from '@/theme/global';
import { colors } from '@/theme/colors';
import { fontSizes } from '@/theme/fontSizes';
import { fonts } from '@/theme/fonts';
import {
  buttonTheme,
  textAreaTheme,
  inputTheme,
  formErrorMessageTheme,
  alertTheme,
  selectTheme,
} from '@/theme/components';

import { headingTheme } from './components/heading';
import { textTheme } from './components/text';
import { lineHeights } from './lineHeights';

export const customTheme = extendTheme({
  breakpoints,
  colors,
  fontSizes,
  lineHeights,
  fonts,
  components: {
    Button: buttonTheme,
    Heading: headingTheme,
    Text: textTheme,
    Textarea: textAreaTheme,
    Input: inputTheme,
    FormError: formErrorMessageTheme,
    Alert: alertTheme,
    Select: selectTheme,
  },
  styles: global,
});
