import { useSessionQuery } from '@/entities/session';

export function HomePage() {
  const { data: session } = useSessionQuery();

  return <div>HomePage {session?.email}</div>;
}
