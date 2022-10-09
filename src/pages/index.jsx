import Head from 'next/head';
import { useRouter } from 'next/router';
import HomeSection from '../components/organisms/HomeSection';

const Home = () => {
  const router = useRouter();
  const anchor = router.asPath.split('/')[1];
  const title = `${
    !anchor
      ? 'Home '
      : `${anchor.substring(1, 2).toUpperCase()}${anchor.substring(2)} `
  }
  | trzpio.dev`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container">
        <HomeSection />
      </div>
    </>
  );
};

export default Home;
