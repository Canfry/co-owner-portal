import { Inter } from 'next/font/google';
import NestedLayout from '@/components/NestedLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <section className={`flex-1 ${inter.className}`}>
      <div className='max-w-[80%] m-auto grid place-content-center h-full'>
        <h1 className='text-xl text-cyan-900 font-bold mb-4'>
          Welcome to Co-Owner Portal
        </h1>
        <p>
          Manage your your meetings, your important documents, chat with the
          other owners or redact them a letter to sign. You'll also be able to
          set up meetings with Google Meet. All in one place, to react and
          communicate faster and to organize better.{' '}
        </p>
        <div className='flex items-center gap-4'>
          <button>Sign in</button>
          <button>Register</button>
        </div>
      </div>
    </section>
  );
}

Home.getLayout = function getLayout(page) {
  return <NestedLayout>{page}</NestedLayout>;
};
