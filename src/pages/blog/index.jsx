import { getAllArticles } from '../api/articles';
import ArticleCard from '../../components/articleCard';
import Head from 'next/head';

const Blog = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Blog | trzpiodesign</title>
      </Head>
      <div className="container flex flex-wrap justify-center md:gap-x-6">
        {articles && articles.length ? (
          articles.map(({ slug, data: article }, idx) => (
            <ArticleCard slug={slug} {...article} key={idx} />
          ))
        ) : (
          <h1>More Articles In The Future!</h1>
        )}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const articles = getAllArticles('blog');
  return {
    props: {
      articles,
    },
  };
};

export default Blog;
