/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

import Cards from '../components/Main/Cards/cards';
import About from '../components/Main/About/about';
import Youtube from '../components/Main/Youtube/youtube';
import Subscribe from '../components/Main/Subscribe/subscribe';

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
        <title>Carreira Cloud</title>
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
            </p>
          </div>
        </section>

        <About />
        <Cards />
        <Youtube />
        <Subscribe />
      </main>
    </>
  );
}
