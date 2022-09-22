import '../styles/globals.css';
import Layout from '../components/layout';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
