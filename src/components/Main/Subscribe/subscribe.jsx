/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import styles from './subscribe.module.scss';

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    email &&
      firstName &&
      lastName &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => handleSubmit(e)}
      id='contact'
    >
      <h2>{status === 'success' ? 'Inscrito!' : 'Inscreva-se'}</h2>

      {status === 'sending' && (
        <div
        // className='mc__alert mc__alert--sending'
        >
          enviando...
        </div>
      )}
      {status === 'error' && (
        <div
          // className='mc__alert mc__alert--error'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          // className='mc__alert mc__alert--success'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== 'success' ? (
        <div>
          <input
            label='First Name'
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            placeholder='Nome'
            required
          />

          <input
            label='Last Name'
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            placeholder='Sobrenome'
            required
          />

          <input
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='exemplo@email.com'
            required
          />
        </div>
      ) : null}

      {status === 'success' ? (
        ''
      ) : (
        <input label='subscribe' type='submit' value='Confirmar inscrição' />
      )}
    </form>
  );
};

export default function Subscribe() {
  const URL = `${process.env.NEXT_PUBLIC_MAILCHIMP_URL}?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  return (
    <section className={styles.section__form}>
      <MailchimpSubscribe
        url={URL}
        render={({ subscribe, status, message }) => (
          <div>
            <img src='/images/subscribe.png' alt='cloud' />

            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          </div>
        )}
      />
    </section>
  );
}
