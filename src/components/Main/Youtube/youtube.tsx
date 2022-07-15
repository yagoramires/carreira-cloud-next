/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import styles from './youtube.module.scss';

export default function Course() {
  return (
    <section className={styles.youtube__section} id='youtube'>
      <div className={styles.youtube__container}>
        <div>
          <a target='_blank' href={'https://www.youtube.com'}>
            Nos acompanhe no<span>youtube</span>
          </a>
          <p>
            Para conquistar as melhores vagas do mercado de <span>Cloud</span>,
            não basta tirar as certificações, é necessário saber fazer! Através
            do nosso conteúdo, você vai ter o conhecimento teórico e prático que
            são cobrados pelo mercado para profissionais de <span>Cloud</span>,
            e tudo isso na plataforma de nuvem que mais tem ganhado mercado ano
            após ano e que o mercado está com uma demanda altíssima de
            profissionais, o <span>Google Cloud Platform (GCP)</span>.
          </p>
        </div>
        <iframe
          width='100%'
          height='300'
          src='https://www.youtube.com/embed/8skzDJrlog8?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0'
          // title='Fazendo um player de vídeo com React #HipstersPontoDicas - @Dev Soutinho'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    </section>
  );
}
