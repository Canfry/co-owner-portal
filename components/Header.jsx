import Link from 'next/link';
import { CgMenuMotion } from 'react-icons/cg';

export default function Header() {
  return (
    <div className='shadow-lg shadow-slate-200 h-[120px] w-full'>
      <header className='max-w-[90%] m-auto flex items-center justify-between h-full'>
        <div className='text-xl md:text-2xl lg:text-4xl'>
          <Link href='/'>Owner's Portal</Link>
        </div>
        <div className='flex items-center gap-2'>
          <p>Welcome </p>
          <button>SignOut</button>
        </div>
        <nav>
          <button>
            <CgMenuMotion className='text-2xl' />
          </button>
        </nav>
      </header>
    </div>
  );
}
