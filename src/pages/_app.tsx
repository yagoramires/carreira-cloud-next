import type { AppProps } from 'next/app';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';

import '../scss/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
