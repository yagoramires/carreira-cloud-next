import styles from './subscribeBtn.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type='button' className={styles.subscribeButton}>
      Registre-se agora!
    </button>
  );
}
