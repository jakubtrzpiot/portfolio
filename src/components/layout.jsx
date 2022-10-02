import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="grow mt-20 lg:mt-[88px] pb-3">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
