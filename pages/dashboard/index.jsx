import Layout from '@/components/Layout';
import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  if (session) {
    return <div>Dashboard</div>;
  } else {
    return null;
  }
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
