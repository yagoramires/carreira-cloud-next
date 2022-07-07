import Image from 'next/image';
import SignButton from './SignInButton/signInButton';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src='/images/logo-cian.png' alt='logo' width={40} height={40} />
        <nav>
          <a href='' className={styles.active}>
            Home
          </a>
          <a href=''>Sobre</a>
          <a href=''>Curso</a>
          <a href=''>Posts</a>
          <a href=''>Contato</a>
        </nav>
        <SignButton></SignButton>
      </div>
    </header>
  );
}
