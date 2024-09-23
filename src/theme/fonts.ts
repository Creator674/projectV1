import { Oswald, Prompt } from '@next/font/google';

const oswald = Oswald({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const fonts = {
  heading: `${oswald.style.fontFamily}, sans-serif`,
  button: `${oswald.style.fontFamily}, sans-serif`,
  body: `${prompt.style.fontFamily}, sans-serif`,
};
