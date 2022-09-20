import Image from 'next/image';
import Head from 'next/head';

const FourOhFour = () => {
  return (
    <>
      <Head>
        <title>404 | Page Not Found</title>
      </Head>
      <div className="container flex relative h-full max-w-[50%] justify-center items-center md:max-w-[25%]">
        <Image alt="404" src="/404.svg" layout="fill" />
      </div>
    </>
  );
};

export default FourOhFour;
