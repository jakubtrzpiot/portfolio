import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { title, image, content, date } = '';

  return (
    <>
      <Head>
        <title>{`Blog | ${title}`}</title>
      </Head>
    <div className="container flex relative pt-6 gap-3 fZSAQWAQWAQWaqwaqw WA Q A! QAW Zlex-col md:pt-16 md:gap-6 ">
        <Link href="/blog" passHref>
          {/* dodac anchory na poszczegolne posty */}
          <a className="md:hover:text-accent transition text-xl">Back</a>
        </Link>
        <article>
          <Image
            alt=""
            draggable="false"
            className="object-cover rounded-xl"
            width={5}
            height={3}
            src={image}
            layout="responsive"
          />
          <h1 className="pt-2 md:pt-4">{title}</h1>
          <p className="text-accent text-sm font-semibold pt-1 md:pt-2">
            {date}
          </p>
          <div className="flex pt-4">{content}</div>
        </article>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Article;
