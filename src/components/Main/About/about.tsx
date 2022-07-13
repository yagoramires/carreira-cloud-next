/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './about.module.scss';

export default function About() {
  return (
    <section className={styles.about__section} id='about'>
      <div className={styles.about__container}>
        <img src='/images/cloud-storage.png' alt='cloud' />
        <div>
          <h2>Sobre</h2>
          <p>
            A nossa missão é mudar a vida das pessoas através da
            profissionalização em <span>Cloud Computing</span>. Acreditamos que
            a fórmula perfeita para que cada um acelere o seu desenvolvimento
            profissional em <span>Cloud</span> é juntando conhecimento teórico
            com experiências práticas. Com isso em vista, produzimos conteúdo
            gratuito de alta qualidade e oferecemos soluções para que você se
            desenvolva cada vez mais. <br />
          </p>
        </div>
      </div>
    </section>
  );
}
