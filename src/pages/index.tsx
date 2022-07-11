import type { GetStaticProps } from 'next';
import { stripe } from '../services/stripe';

import Head from 'next/head';
import Image from 'next/image';

import SubscribeButton from '../components/Main/SubscribeButton/subscribeButton';
import Cards from '../components/Main/Cards/cards';
import About from '../components/Main/About/about';
import Youtube from '../components/Main/Youtube/youtube';
import Contact from '../components/Main/Contact/contact';
import Footer from '../components/Footer/footer';

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
        <section className='contentContainer'>
          <div className='contentTexts'>
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
          </div>
          <div className='image'>
            <Image
              src='/images/cloud-vector.png'
              alt='cloud'
              width={600}
              height={600}
            />
          </div>
        </section>

        <Youtube />
        <About />
        <Cards />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

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
