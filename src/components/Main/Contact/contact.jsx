import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
    <section className='contact__container' id='contact'>
      <div className='contact__content'>
        <div>
          <h1 className='contact__title'>Contato</h1>
          <p className='contact__text'>
            Tire suas dúvidas através do nosso e-mail
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <input
            type='text'
            placeholder='Nome'
            name='user_name'
            className='form__input'
            onClick={handleClick}
            required
          />
          <input
            type='email'
            placeholder='E-mail'
            name='user_email'
            className='form__input'
            onClick={handleClick}
            required
          />
          <textarea
            type='text'
            placeholder='Mensagem'
            name='message'
            className='form__text'
            onClick={handleClick}
            required
          />
          <input type='submit' value={sent} className='form__button' />
        </form>
      </div>
    </section>
  );
}
