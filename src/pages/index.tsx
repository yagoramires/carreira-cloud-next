/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps } from 'next';
// import { stripe } from '../services/stripe';

import Head from 'next/head';

import SubscribeButton from '../components/Main/SubscribeButton/subscribeButton';

import Cards from '../components/Main/Cards/cards';
import About from '../components/Main/About/about';
import Youtube from '../components/Main/Youtube/youtube';
import Contact from '../components/Main/Contact/contact';
import Footer from '../components/Footer/footer';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | Carreira Cloud</title>
        <meta name='description' content='Descrição' />
      </Head>

      <main>
        <section className={styles.contentContainer}>
          <img src='/images/cloud-vector.png' alt='cloud' />
          <div className={styles.contentTexts}>
            <span>Acelere a sua carreira através da Cloud</span>
            <h1>
              Conquiste as <span>melhores</span> oportunidades de TI
            </h1>
            <p>
              Aprenda a conduzir os mais diversos projetos de Cloud,
              <br /> e tenha um dos
              <span> perfis mais valorizados do mercado</span>
              {/* por apenas{' '}
                {(product.amount / 100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })} */}
            </p>

            {/* <SubscribeButton priceId={product.priceId} /> */}
          </div>
        </section>

        <About />
        <Cards />
        <Youtube />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const price = await stripe.prices.retrieve('price_1LJ1ZlD1bOm9sglnlzgzdObc', {
//     expand: ['product'],
//   });

//   const product = {
//     priceId: price.id,
//     amount: price.unit_amount,
//   };

//   return {
//     props: {
//       product,
//     },
//     revalidate: 60 * 60 * 24, //60seg * 60min * 24h = 1dia
//   };
// };
