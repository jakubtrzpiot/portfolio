import Image from 'next/image';
import Head from 'next/head';

const FourOhFour = () => {
  return (
    <div className="container__global justify-center items-center">
      <Head>
        <title>404 | Page Not Found</title>
      </Head>
      <Image
        alt=""
        src="/404.svg"
        height={200}
        width={300}
        layout="intrinsic"
      />
    </div>
  );
};

export default FourOhFour;
