import { useSession, signIn, signOut } from 'next-auth/react';

import { SiGmail } from 'react-icons/si';
import { FiX } from 'react-icons/fi';

import styles from './signin.module.scss';

export default function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type='button'
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <SiGmail color='#04d361' /> {session.user?.email}
      <FiX className='closeIcon' />
    </button>
  ) : (
    <button
      type='button'
      className={styles.signInButton}
      onClick={() => signIn('google')}
    >
      <SiGmail color='red' /> Entre com o Google
    </button>
  );
}
