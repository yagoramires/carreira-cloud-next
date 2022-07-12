/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

import styles from './about.module.scss';

export default function About() {
  return (
    <section className={styles.about} id='about'>
      <div className={styles.aboutContainer}>
        <img
          src='/images/cloud-storage.png'
          alt='cloud'
          className={styles.image}
        />
        <div className={styles.aboutText}>
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
