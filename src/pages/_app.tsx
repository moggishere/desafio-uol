import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>desafio UOL</title>
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* TODO remover os links de download de font da google e substituir por download delas */}
        <link
          href="https://fonts.googleapis.com/css2?family=Besley:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@100;400;500;700&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Project for UOL" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
