import { NextPage } from 'next';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

import { customTheme } from '@/theme';
import { PROGRESSBAR_CONFIG } from '@/constants';
import { Fonts } from '@/components/Common';

//According to a documentation the line looks like this:
//export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//but ts says we should use any/unknown or object instead.
export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      </Head>

      <Fonts />

      <NextNProgress {...PROGRESSBAR_CONFIG} />

      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
