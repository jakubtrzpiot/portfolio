import { useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  const setHeight = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`,
    );
  };
  useEffect(() => {
    setHeight();
    let doit;
    window.onresize = () => {
      clearTimeout(doit);
      doit = setTimeout(setHeight, 200);
    };
  }, []);
  return (
    <>
      <Navbar />
      <main className="mt-20 grow pb-3">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
