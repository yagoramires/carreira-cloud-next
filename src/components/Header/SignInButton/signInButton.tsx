import { SiGmail } from 'react-icons/si';
import { FiX } from 'react-icons/fi';
import styles from './signInButton.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function SignInButton() {
  const { data: session } = useSession();

  // console.log(session);

  return session ? (
    <button
      type='button'
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <SiGmail color='#04d361' /> {session.user.email}
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type='button'
      className={styles.signInButton}
      onClick={() => signIn('google')}
    >
      <SiGmail color='red' /> Sign in with Google
    </button>
  );
}
