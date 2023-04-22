import Footer from './Footer';

export default function NestedLayout({ children }) {
  return (
    <>
      <div
        className='h-screen w-full flex flex-col bg-gradient-to-b from-[#08AEEA] to-[#2AF598]
]'
      >
        {children}
        <Footer />
      </div>
    </>
  );
}
