/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './subscribe.module.scss';

export default function Contact() {
  return (
    <section className={styles.section__contact} id='contact'>
      <div>
        <img src='/images/subscribe.png' alt='cloud' />
        {/*
        <form
          action='https://gmail.us18.list-manage.com/subscribe/post'
          method='POST'
        >
           <input type='hidden' name='u' value='e20752138a1a6cbb461cf6e0d' />

          <input type='hidden' name='id' value='eee094a12a' />
          <div
            class='field-shift'
            aria-label='Please leave the following three fields empty'
            aria-hidden='true'
          >
            <label for='b_name'>Name: </label>
            <input
              type='text'
              name='b_name'
              tabindex='-1'
              value=''
              placeholder='Freddie'
              id='b_name'
            />
            <label for='b_email'>Email: </label>
            <input
              type='email'
              name='b_email'
              tabindex='-1'
              value=''
              placeholder='youremail@gmail.com'
              id='b_email'
            />
            <label for='b_comment'>Comment: </label>
            <textarea
              name='b_comment'
              tabindex='-1'
              placeholder='Please comment'
              id='b_comment'
            ></textarea>
          </div>

          <div id='mergeTable' class='mergeTable'>
            <div class='mergeRow dojoDndItem mergeRow-email' id='mergeRow-0'>
              <label for='MERGE0'>
                Email Address <span class='req asterisk'>*</span>
              </label>
              <div class='field-group'>
                <input
                  type='email'
                  autocapitalize='off'
                  autocorrect='off'
                  name='MERGE0'
                  id='MERGE0'
                  size='25'
                  value=''
                />
              </div>
            </div>

            <div class='mergeRow dojoDndItem mergeRow-text' id='mergeRow-1'>
              <label for='MERGE1'>First Name</label>
              <div class='field-group'>
                <input
                  type='text'
                  name='MERGE1'
                  id='MERGE1'
                  size='25'
                  value=''
                />
              </div>
            </div>
            <div class='mergeRow dojoDndItem mergeRow-text' id='mergeRow-2'>
              <label for='MERGE2'>Last Name</label>
              <div class='field-group'>
                <input
                  type='text'
                  name='MERGE2'
                  id='MERGE2'
                  size='25'
                  value=''
                />
              </div>
            </div>
          </div>

          <div class='submit_container clear'>
            <input
              type='submit'
              class='formEmailButton'
              name='submit'
              value='Inscrever-se'
            />
          </div>

          <input
            type='hidden'
            name='ht'
            value='90e637fee2341a0d551acbc53c28ea9561bc88b3:MTY1NzgwNTgxMC40NzM3'
          />
          <input type='hidden' name='mc_signupsource' value='hosted' /> [
        </form>
            */}
      </div>
    </section>
  );
}
