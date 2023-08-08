import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>desafio UOL</title>
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Project for UOL" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
