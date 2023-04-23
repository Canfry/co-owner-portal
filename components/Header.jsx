import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CgMenuMotion } from 'react-icons/cg';

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <div className='shadow-lg shadow-slate-200 h-[120px] w-full'>
        <header className='max-w-[90%] m-auto flex items-center justify-between h-full'>
          <div className='text-xl md:text-2xl lg:text-4xl'>Owner's Portal</div>
          <div className='flex items-center gap-2'>
            <p>Welcome {session.user.name}</p>
            <button onClick={() => signOut()}>SignOut</button>
          </div>
          <nav>
            <button>
              <CgMenuMotion className='text-2xl' />
            </button>
          </nav>
        </header>
      </div>
    );
  } else {
    useEffect(() => {
      router.push('/signin');
    });
  }
}
