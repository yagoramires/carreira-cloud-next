/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from './contact.module.scss';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState('Enviar');

  const handleClick = () => {
    setSent('Enviar');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAIL_JS_SERVICE,
        process.env.EMAIL_JS_TEMPLATE,
        form.current,
        process.env.EMAIL_JS_USER,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    setSent('Enviado !');
  };

  return (
    <section className={styles.section__contact} id='contact'>
      <div >
        <img src='/images/cloud-storage.png' alt='cloud' />

        <form ref={form} onSubmit={sendEmail}>
        <h2 >Contato</h2>
          <input
            type='text'
            placeholder='Nome'
            name='user_name'
            onClick={handleClick}
            required
          />
          <input
            type='email'
            placeholder='E-mail'
            name='user_email'
            onClick={handleClick}
            required
          />
          <textarea
            type='text'
            placeholder='Mensagem'
            name='message'
            onClick={handleClick}
            required
          />
          <button type='submit'>{sent}</button>
        </form>
      </div>
    </section>
  );
}
