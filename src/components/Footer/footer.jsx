import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='social'>
        {/* <a
          href='https://www.linkedin.com/'
          target='_blank'
          className='social__link'
        >
          <FaLinkedin className='social__icon' size={30} />
        </a>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          className='social__link'
        >
          <FaInstagram className='social__icon' size={30} />
        </a>
        <a
          href='https://www.youtube.com/'
          target='_blank'
          className='social__link'
        >
          <FaYoutube className='social__icon' size={30} />
        </a> */}
      </div>
      <div className='copyright'>
        <p className='copyright__text'>
          © Carreira Cloud 2022 - Todos os direitos reservados | Designed by
          {/* <a href='https://wa.me/5521969711937' target='_blank'>
            Yago Ramires
          </a> */}
        </p>
      </div>
    </footer>
  );
}
