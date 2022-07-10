import type { AppProps } from 'next/app';
import Header from '../components/Header/header';
import '../styles/global.scss';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session} refetchInterval={5 * 60}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
