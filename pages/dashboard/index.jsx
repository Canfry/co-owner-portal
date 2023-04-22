import Layout from '@/components/Layout';

export default function Dashboard() {
  return <div>Dashboard</div>;
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
