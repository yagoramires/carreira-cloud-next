import React from 'react';

export default function Course() {
  return (
    <section className='course__container' id='youtube'>
      <div className='course'>
        <div className='course__content'>
          <h1 className='course__title'>Nos acompanhe no youtube</h1>
          <a href='#' className='course__button'>
            Youtube
          </a>
        </div>
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
