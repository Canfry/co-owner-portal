import Footer from './Footer';

export default function NestedLayout({ children }) {
  return (
    <>
      <div className='min-h-screen w-full flex flex-col'>
        {children}
        <Footer />
      </div>
    </>
  );
}
