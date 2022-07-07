import { SiGmail } from 'react-icons/si';
import { FiX } from 'react-icons/fi';
import styles from './signInButton.module.scss';

export default function SignInButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button type='button' className={styles.signInButton}>
      <SiGmail color='#04d361' /> username <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button type='button' className={styles.signInButton}>
      <SiGmail color='red' /> Sign in with Google
    </button>
  );
}
