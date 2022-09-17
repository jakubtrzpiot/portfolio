import ArticleCard from '../../components/articleCard';
import Head from 'next/head';
import { articles } from '../../data';

const Blog = () => {
  return (
    <div className="padding_b container__global flex-wrap justify-between gap-3 md:gap-6">
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
