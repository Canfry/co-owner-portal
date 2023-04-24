import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='h-[calc(100vh-145px)]'>{children}</main>
      <Footer />
    </>
  );
}
