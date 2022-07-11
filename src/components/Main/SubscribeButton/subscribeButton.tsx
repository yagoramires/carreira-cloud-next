interface SubscribeButtonProps {
  priceId: string;
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type='button' className='subscribeButton'>
      Registre-se agora!
    </button>
  );
}
