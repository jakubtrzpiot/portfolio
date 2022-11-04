import { getParams, getArticleBySlug } from '../api/articles';
import md from 'markdown-it';
import Link from 'next/link';
import Head from 'next/head';

const Article = ({ data: { title, date }, content }) => {
  return (
    <>
      <Head>
        <title>{`Blog | ${title}`}</title>
      </Head>
      <div className="container prose prose-sm md:prose lg:prose-lg lg:max-w-screen-md xl:max-w-screen-lg relative pt-5">
        <div className="flex justify-between items-center">
          <Link href="/blog" passHref>
            <a className="hidden md:flex w-fit link_before -m-5">Back</a>
          </Link>
          <p className="text-primary text-sm font-semibold pt-2 md:pt-0">
            {date}
          </p>
        </div>
        <h1 className="">{title}</h1>

        <div
          className="pt-4"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paramsList = getParams();
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

  const { data, content } = getArticleBySlug(slug);
  return {
    props: { data, content },
  };
};

export default Article;
