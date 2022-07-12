/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a href='https://www.linkedin.com/' target='_blank'>
          <FaLinkedin size={30} />
        </a>
        <a href='https://www.instagram.com/' target='_blank'>
          <FaInstagram size={30} />
        </a>
        <a href='https://www.youtube.com/' target='_blank'>
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
