import '../styles/globals.css';
import Layout from '../components/layout';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
  const setTheme = () => {
    if ('theme' in localStorage) {
      localStorage.theme === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };
  const setHeight = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`,
    );
  };

  useEffect(() => {
    setTheme();
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
