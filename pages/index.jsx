import { Lato } from 'next/font/google';
import NestedLayout from '@/components/NestedLayout';
import Link from 'next/link';

import { CgMenuMotion } from 'react-icons/cg';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export default function Home() {
  return (
    <section className={` bg-cyan-50 ${lato.className} py-20`}>
      <div className='max-w-[80%] m-auto h-full flex flex-col justify-start'>
        <div className='flex items-center justify-between'>
          <div className='pb-20'>
            <h1 className='text-4xl'>LOGO</h1>
          </div>
          <button className='pb-20'>
            <CgMenuMotion className='text-3xl' />
          </button>
        </div>
        <h1 className='text-4xl text-cyan-900 font-bold mb-4'>
          Welcome to Co-Owner Portal
        </h1>
        <h2 className='text-2xl text-cyan-800 font-bold mb-4'>
          Discover a new way to organize your properties.
        </h2>
        <p className='text-cyan-800 text-xl'>
          Manage your meetings, your important documents, chat with the other
          owners or redact them a letter to sign. You'll also be able to set up
          meetings with Google Meet. All in one place, react and communicate
          faster, organize better.
        </p>
        <div className='flex items-center gap-4 mt-6'>
          <Link href='/signin'>
            <button className='border border-cyan-800 py-1 px-4 rounded-lg text-cyan-950 text-lg hover:bg-cyan-800 hover:text-white'>
              Sign in
            </button>
          </Link>
          <p>or</p>
          <Link href='/register'>
            <h2 className='text-lg text-cyan-900 hover:text-cyan-700'>
              Register
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
}

Home.getLayout = function getLayout(page) {
  return <NestedLayout>{page}</NestedLayout>;
};
