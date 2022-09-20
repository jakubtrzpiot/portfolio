import ArticleCard from '../../components/articleCard';
import Head from 'next/head';
import { articles } from '../../data';

const Blog = () => {
  return (
    <div className="container flex flex-wrap md:gap-x-6">
      <Head>
        <title>Blog | trzpiodesign</title>
      </Head>
      {articles.map((article, idx) => (
        <ArticleCard {...article} key={idx} />
      ))}
    </div>
  );
};

export default Blog;
