import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import SignButton from '../SignInButton/signInButton';

import styles from './header.module.scss';

export default function Header() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image src='/images/logo-cian.png' alt='logo' width={40} height={40} />
        <div className={styles.mobile} onClick={handleActive}>
          <Image src='/images/menu.png' alt='menu' width={25} height={25} />
        </div>
        <nav className={active ? styles.show : styles.hide}>
          <a href='#home' className={styles.active} onClick={handleActive}>
            Home
          </a>
          <a href='#about' className='' onClick={handleActive}>
            Sobre
          </a>
          <a href='#cards' className='' onClick={handleActive}>
            Conteúdo
          </a>
          <a href='#contact' className='' onClick={handleActive}>
            Contato
          </a>
          <Link href='/'>
            Blog
          </Link>
          {/* <SignButton></SignButton> */}
        </nav>
      </div>
    </header>
  );
}
