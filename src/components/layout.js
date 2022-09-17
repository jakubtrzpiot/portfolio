import { useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  const setWindowHeight = () => {
    let vh = globalThis?.window?.innerHeight * 0.01;
    globalThis?.document?.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log('resize!');
  };

  useEffect(() => {
    let doit;
    window.onresize = () => {
      clearTimeout(doit);
      doit = setTimeout(setWindowHeight, 100);
    };
  }, [setWindowHeight]);

  return (
    <>
      <Navbar />
      <main className="mt-[76px] md:mt-[108px] grow">{children}</main>
      <Footer />
    </>
  );
}
