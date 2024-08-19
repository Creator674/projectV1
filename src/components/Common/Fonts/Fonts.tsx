import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`  
      /* OldStandartTT Regular */
      @font-face {
        font-family: 'Old Standart Regular TT';
        src: url('/fonts/OldStandartTT/OldStandartTT-Regular.woff2') format('woff2'), url('/fonts/OldStandartTT/OldStandartTT-Regular.woff') format('woff');
      }

      /* OldStandartTT Italic */
      @font-face {
        font-family: 'Old Standart Italic TT';
        src: url('/fonts/OldStandartTT/OldStandartTT-Italic.woff2') format('woff2'), url('/fonts/OldStandartTT/OldStandartTT-Italic.woff') format('woff');
      }

      /* OldStandartTT Bold */
      @font-face {
        font-family: 'Old Standart Bold TT';
        src: url('/fonts/OldStandartTT/OldStandartTT-Bold.woff2') format('woff2'), url('/fonts/OldStandartTT/OldStandartTT-Bold.woff') format('woff');
      }
    `}
  />
);
