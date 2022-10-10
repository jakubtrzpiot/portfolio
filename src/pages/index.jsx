import Head from 'next/head';
import { useRouter } from 'next/router';

import HomeSection from '../components/organisms/HomeSection';
import AboutSection from '../components/organisms/AboutSection';
import ProjectSection from '../components/organisms/ProjectsSection';
import ContactSection from '../components/organisms/ContactSection';

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
      <div className="flex flex-col gap-40">
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
