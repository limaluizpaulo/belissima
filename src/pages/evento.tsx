import { useRouter } from 'next/router';

export default function Evento() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Evento ID: {id}</div>;
}
