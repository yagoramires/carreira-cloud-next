import React, { useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

import styles from './card.module.scss';

export default function Card() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={styles.cards__section} id='cards'>
      <div className={styles.cards__container}>
        <div
          ref={ref}
          className={styles.card}
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'opacity 0.9s, transform 0.6s',
          }}
        >
          <div></div>
          <h3>Cloud Computing</h3>
          <p>
            Entenda os conceitos mais importantes do universo de Cloud
            Computing, na Cloud que mais tem crescido nos últimos anos. Ter uma
            base forte de conhecimento é um grande diferencial no mercado de
            Cloud computing.
          </p>
        </div>
        <div
          className={styles.card}
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'opacity 0.9s, transform 1.2s',
          }}
        >
          <div></div>
          <h3>Opções de carreira</h3>
          <p>
            Através do nosso conteúdo focado em carreira você vai descobrir que
            dentro do mercado de Cloud Computing existem diversas
            possibilidades, aprenda com quem já está no mercado e descubra qual
            carreira faz mais sentido para você.
          </p>
        </div>
        <div
          className={styles.card}
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'opacity 0.9s, transform 1.8s',
          }}
        >
          <div></div>
          <h3>Experiência prática</h3>
          <p>
            Um dos principais diferenciais na hora de se fazer uma contratação é
            o profissional já ter tido experiências anteriores. Aprenda através
            de casos reais do mercado, aplique toda a base que você aprendeu
            para executar projetos reais e se diferencie do mercado.
          </p>
        </div>
      </div>
    </section>
  );
}
