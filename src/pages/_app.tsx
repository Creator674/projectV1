import { NextPage } from 'next';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

import { customTheme } from '@/theme';

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
    <ChakraProvider
      resetCSS
      theme={customTheme}
    >
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
