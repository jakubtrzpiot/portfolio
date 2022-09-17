import Image from 'next/image';
import image from '../../public/404.png';
import Head from 'next/head';

const FourOhFour = () => {
  return (
    <div className="container__global flex-col justify-center items-center">
      <Head>
        <title>Page Not Found | trzpiodesign</title>
      </Head>
      <Image src={image} />
    </div>
  );
};

export default FourOhFour;
