/* eslint-disable react/jsx-no-target-blank */
import Link from 'next/link';
import React from 'react';

import { FaYoutube } from 'react-icons/fa';

import styles from './youtube.module.scss';

export default function Course() {
  return (
    <section className={styles.youtube__section} id='youtube'>
      <div className={styles.youtube__container}>
        <a target='_blank' href={'https://www.youtube.com'}>
          Nos acompanhe no<span>youtube</span>{' '}
          <FaYoutube size={40} color={'white'} />
        </a>
        <iframe
          width='100%'
          height='300'
          src='https://www.youtube.com/embed/8skzDJrlog8?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0'
          title='Fazendo um player de vídeo com React #HipstersPontoDicas - @Dev Soutinho'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          // controls='0'
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
