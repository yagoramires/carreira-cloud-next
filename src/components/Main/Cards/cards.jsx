import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

export default function Card() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className='cards' id='cards'>
      <div className='cards__container'>
        <div className='cards__content'>
          <div
            className='card'
            style={{
              transform: isInView ? 'none' : 'translateY(200px)',
              opacity: isInView ? 1 : 0,
              transition:
                'opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1), transform 0.6s',
            }}
          >
            <div className='img img-cloud'></div>
            <h2 className='card__title'>Cloud Computing</h2>
            <p className='card__text'>
              Entenda os conceitos mais importantes do universo de Cloud
              Computing, na Cloud que mais tem crescido nos últimos anos. Ter
              uma base forte de conhecimento é um grande diferencial no mercado
              de Cloud computing.
            </p>
          </div>
          <div
            ref={ref}
            className='card'
            style={{
              transform: isInView ? 'none' : 'translateY(200px)',
              opacity: isInView ? 1 : 0,
              transition:
                'opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1),transform 1.2s',
            }}
          >
            <div className='img img-career'></div>
            <h2 className='card__title'>Opções de carreira</h2>
            <p className='card__text'>
              Através do nosso conteúdo focado em carreira você vai descobrir
              que dentro do mercado de Cloud Computing existem diversas
              possibilidades, aprenda com quem já está no mercado e descubra
              qual carreira faz mais sentido para você.
            </p>
          </div>
          <div
            className='card'
            style={{
              transform: isInView ? 'none' : 'translateY(200px)',
              opacity: isInView ? 1 : 0,
              transition:
                'opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1), transform 1.8s',
            }}
          >
            <div className='img img-exp'></div>
            <h2 className='card__title'>Experiência prática</h2>
            <p className='card__text'>
              Um dos principais diferenciais na hora de se fazer uma contratação
              é o profissional já ter tido experiências anteriores. Aprenda
              através de casos reais do mercado, aplique toda a base que você
              aprendeu para executar projetos reais e se diferencie do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
