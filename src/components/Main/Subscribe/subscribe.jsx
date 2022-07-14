import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import styles from './subscribe.module.scss';

// interface FormProps {
//   status: string;
//   message: string;
//   onValidated: any;
//   CustomForm: any;
// }

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
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <h2 className='mc__title'>
        {status === 'success' ? 'Inscrito!' : 'Inscreva-se'}
      </h2>

      {status === 'sending' && (
        <div className='mc__alert mc__alert--sending'>enviando...</div>
      )}
      {status === 'error' && (
        <div
          className='mc__alert mc__alert--error'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          className='mc__alert mc__alert--success'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== 'success' ? (
        <div className='mc__field-container'>
          <input
            label='First Name'
            onChangeHandler={setFirstName}
            type='text'
            // value={firstName}
            placeholder='Jane'
            isRequired
          />

          <input
            label='Last Name'
            onChangeHandler={setLastName}
            type='text'
            // value={lastName}
            placeholder='Doe'
            isRequired
          />

          <input
            label='Email'
            onChangeHandler={setEmail}
            type='email'
            // value={email}
            placeholder='your@email.com'
            isRequired
          />
        </div>
      ) : null}

      {/*Close button appears if form was successfully sent*/}
      {status === 'success' ? (
        <p>Enviado!</p>
      ) : (
        <input
          label='subscribe'
          type='submit'
          formValues={[email, firstName, lastName]}
        />
      )}
    </form>
  );
};

export default function Subscribe() {
  const url = `https://genhybridsystems.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className='mc__form-container'>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
}
