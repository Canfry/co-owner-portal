import Footer from './Footer';
import Header from './Header';
import { SessionProvider } from 'next-auth/react';

export default function Layout({ children, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <Header />
        <main className='h-[calc(100vh-145px)]'>{children}</main>
        <Footer />
      </SessionProvider>
    </>
  );
}
