import { useState } from 'react';

import Image from 'next/image';

import styles from './header.module.scss';
import ActiveLink from './ActiveLink/ActiveLink';
import Link from 'next/link';

export default function Header() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <Image
            src='/images/logo-cian.png'
            alt='logo'
            width={40}
            height={40}
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <div className={styles.mobile} onClick={handleActive}>
          <Image src='/images/menu.png' alt='menu' width={25} height={25} />
        </div>
        <nav
          className={active ? styles.show : styles.hide}
          onClick={handleActive}
        >
          <ActiveLink href='/' activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <Link href='/#about'>
            <a>Sobre</a>
          </Link>
          <Link href='/#content'>
            <a>Conteúdo</a>
          </Link>
          <Link href='/#contact'>
            <a>Contato</a>
          </Link>
          <ActiveLink href='/posts' activeClassName={styles.active}>
            <a>Blog</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
