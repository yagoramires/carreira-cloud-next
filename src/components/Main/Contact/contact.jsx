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
      <div className={styles.title}>
        <h1 className={styles.title}>Contato</h1>

        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input
            type='text'
            placeholder='Nome'
            name='user_name'
            className={styles.input}
            onClick={handleClick}
            required
          />
          <input
            type='email'
            placeholder='E-mail'
            name='user_email'
            className={styles.input}
            onClick={handleClick}
            required
          />
          <textarea
            type='text'
            placeholder='Mensagem'
            name='message'
            className={styles.message}
            onClick={handleClick}
            required
          />
          <input type='submit' value={sent} className={styles.btn} />
        </form>
      </div>
    </section>
  );
}
