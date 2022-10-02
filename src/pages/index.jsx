import Head from 'next/head';
import Contact from '../components/contact';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | trzpiodesign</title>
      </Head>
      <div className="container flex flex-col pt-10">
        <div>
          <div className="flex flex-col lg:flex-row wrap gap-10">
            <div className="basis-1/2 lg:mt-24">
              <h3 className="mb-4 text-base md:text-lg xl:text-xl font-bold text-accent dark:text-accentLight">
                Full Stack Developer
              </h3>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6 lg:mb-10">
                Hi, I'm Kuba Trzpiot
              </h1>
              <p className="text-base md:text-xl leading-8 md:leading-9 text-disabled dark:text-[#aaa] mb-8 lg:mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                obcaecati ipsa rerum quia quo excepturi dolorum. Saepe obcaecati
                ipsa rerum quia quo excepturi dolorum.
              </p>
              <div className="flex gap-4">
                <button className="bg-accent dark:bg-[#3c7ac1] px-12 lg:px-14 py-5 text-white rounded-xl">
                  Hire Me!
                </button>
                <Link href="/#contact" scroll={false}>
                  <button className="bg-accent/10 dark:bg-accentLight/20 text-accent dark:text-white  px-8 py-5 rounded-xl">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex relative basis-1/2 justify-center lg:justify-end">
              <Image
                src="/assets/robot3.png"
                width={512}
                height={619}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-40 lg:pt-80" id="about"></div>
        <div className="h-[150vh] pt-20 md:pt-[88px]" id="projects">
          Here are some of my projects
        </div>
        <Contact id="contact" />
      </div>
    </>
  );
};

export default Home;
