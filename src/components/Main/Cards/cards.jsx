import React from 'react';
import { HiOutlineCloud } from 'react-icons/hi';

export default function Card() {
  const teste = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, molestiae! Quibusdam corrupti, quod fugit nostrum dignissimos repudiandae explicabo, recusandae iure quo quisquam ipsa, ut sapiente. Officia corrupti reiciendis deleniti quam.',
      icon: HiOutlineCloud,
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, molestiae! Quibusdam corrupti, quod fugit nostrum dignissimos repudiandae explicabo, recusandae iure quo quisquam ipsa, ut sapiente. Officia corrupti reiciendis deleniti quam.',
      icon: HiOutlineCloud,
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, molestiae! Quibusdam corrupti, quod fugit nostrum dignissimos repudiandae explicabo, recusandae iure quo quisquam ipsa, ut sapiente. Officia corrupti reiciendis deleniti quam.',
      icon: HiOutlineCloud,
    },
  ];

  return (
    <section id='cards'>
      <div className='cards__container'>
        <h1 className='cards__title'>Cards</h1>
        <div className='cards__content'>
          {teste.map((content, i) => {
            return (
              <div className='card' key={i}>
                <HiOutlineCloud size={100} className='card__icon' />
                <p className='card__text'>{content.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
