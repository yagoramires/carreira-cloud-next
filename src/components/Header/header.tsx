import Image from 'next/image';
import SignButton from './SignInButton/signInButton';

export default function Header() {
  return (
    <header className='headerContainer'>
      <div className='headerContent'>
        <Image src='/images/logo-cian.png' alt='logo' width={40} height={40} />
        <nav>
          <a href='' className='active'>
            Home
          </a>
          <a href='#about'>Sobre</a>
          <a href='#cards'>Curso</a>
          <a href='#contact'>Contato</a>
          <a href='/blog'>Blog</a>
        </nav>
        <SignButton></SignButton>
      </div>
    </header>
  );
}
