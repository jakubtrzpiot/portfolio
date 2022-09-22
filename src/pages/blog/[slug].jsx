import { getParams, getArticleByFile } from '../api/articles';
import md from 'markdown-it';
import Link from 'next/link';
import Head from 'next/head';

const Article = ({ data: { title, date }, content }) => {
  return (
    <>
      <Head>
        <title>{`Blog | ${title}`}</title>
      </Head>
      <div className="container prose dark:prose-invert prose-sm md:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl relative pt-5">
        <Link href="/blog" passHref>
          <a className="md:hover:text-accent w-fit transition">Back</a>
        </Link>
        <h1 className="pt-2 md:pt-4">{title}</h1>
        <p className="text-accent text-sm font-semibold">{date}</p>
        <div
          className="pt-4"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paramsList = getParams('blog');
  const params = paramsList.map(slug => ({
    params: { slug: slug },
  }));
  return {
    fallback: false,
    paths: params,
  };
};

export const getStaticProps = async context => {
  const {
    params: { slug },
  } = context;
  console.log(slug);
  const { data, content } = getArticleByFile('blog', slug);
  return {
    props: { data, content },
  };
};

export default Article;
