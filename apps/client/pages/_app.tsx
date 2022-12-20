import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@triprint/ui/css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>TRIPRINT</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
