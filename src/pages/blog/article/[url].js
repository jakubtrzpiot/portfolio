import { useRouter } from 'next/router';
import { articles } from '../../../data';
import Head from 'next/head';
import Image from 'next/image';

const Article = () => {
  const router = useRouter();
  const { url } = router.query;
  const { title, image, content } = articles.find(obj => obj.url === url);

  return (
    <div className="container__global gap-2 md:gap-4 flex-col">
      <Head>
        <title>{`Blog | ${title}`}</title>
      </Head>
      <Image
        alt=""
        draggable="false"
        className="object-cover rounded-xl"
        width={2}
        height={1}
        src={image}
        layout="responsive"
      />
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Article;
