import Image from 'next/image';
import React from 'react';

// import CloudStorage from '../../assets/cloud_storage.png';

export default function About() {
  return (
    <section className='about__container' id='about'>
      <div className='about'>
        <Image
          src='/images/cloud-storage.png'
          alt='cloud'
          width={600}
          height={600}
        />{' '}
        <div className='about__content'>
          <h1 className='about__title'>Sobre</h1>
          <p className='about__paragraph'>
            A nossa missão é mudar a vida das pessoas através da
            profissionalização em <span>Cloud Computing</span>. Acreditamos que
            a fórmula perfeita para que cada um acelere o seu desenvolvimento
            profissional em <span>Cloud</span> é juntando conhecimento teórico
            com experiências práticas. Com isso em vista, produzimos conteúdo
            gratuito de alta qualidade e oferecemos soluções para que você se
            desenvolva cada vez mais. <br />
          </p>
          <p>
            Para conquistar as melhores vagas do mercado de <span>cloud</span>,
            não basta tirar as certificações, é necessário saber fazer! Através
            do nosso conteúdo, você vai ter o conhecimento teórico e prático que
            são cobrados pelo mercado para profissionais de <span>Cloud</span>,
            e tudo isso na plataforma de nuvem que mais tem ganhado mercado ano
            após ano e que o mercado está com uma demanda altíssima de
            profissionais, o <span>Google Cloud Platform (GCP)</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
