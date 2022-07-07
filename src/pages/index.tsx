import type { GetStaticProps } from 'next';
import Head from 'next/head';
import SubscribeButton from '../components/Home/SubscribeButton/subscribeButton';
import Image from 'next/image';

import styles from './home.module.scss';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

// const Home: NextPage = ({ product }: HomeProps) => {
export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | Carreira Cloud</title>
        <meta name='description' content='Descrição' />
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.contentTexts}>
          <span>Acelere a sua carreira através da Cloud</span>
          <h1>
            Conquiste as <span>melhores</span> oportunidades de TI.
          </h1>
          <p>
            Aprenda a conduzir os mais diversos projetos de Cloud,
            <br /> e tenha um dos
            <span>
              {' '}
              perfis mais valorizados do mercado por apenas{' '}
              {(product.amount / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image src='/images/cloud-vector.png' alt='' width={600} height={600} />
      </main>
    </>
  );
}

// export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1LJ1ZlD1bOm9sglnlzgzdObc', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //60seg * 60min * 24h = 1dia
  };
};
