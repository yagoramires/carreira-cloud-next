/* eslint-disable react/jsx-no-target-blank */
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

import styles from './footer.module.scss';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className={styles.footer}>
      <div className={styles.social} ref={ref}>
        <a
          href='https://www.linkedin.com/'
          target='_blank'
          style={{
            transform: isInView ? 'none' : 'translateY(150px)',
            opacity: isInView ? 1 : 0,
            transition:
              'opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1), transform 1.2s',
          }}
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          style={{
            transform: isInView ? 'none' : 'translateY(150px)',
            opacity: isInView ? 1 : 0,
            transition:
              'opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1), transform 0.8s',
          }}
        >
          <FaInstagram size={30} />
        </a>
        <a
          href='https://www.youtube.com/'
          target='_blank'
          style={{
            transform: isInView ? 'none' : 'translateY(150px)',
            opacity: isInView ? 1 : 0,
            transition:
              'opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1), transform 0.4s',
          }}
        >
          <FaYoutube size={30} />
        </a>
      </div>
      <div className={styles.copyright}>
        <p>
          © Carreira Cloud 2022 - Todos os direitos reservados | Designed by{' '}
          <a href='https://wa.me/5521969711937' target='_blank'>
            Yago Ramires
          </a>
        </p>
      </div>
    </footer>
  );
}
