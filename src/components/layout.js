import { useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  useEffect(() => {
    const setWindowHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    let doit;
    window.onresize = () => {
      clearTimeout(doit);
      doit = setTimeout(setWindowHeight, 100);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mt-[76px] md:mt-[108px] grow">{children}</main>
      <Footer />
    </>
  );
}
