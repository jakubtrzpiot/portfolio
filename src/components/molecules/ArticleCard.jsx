import Image from 'next/image';
import Link from 'next/link';

const ArticleCard = ({ slug, title, image, description, date }) => {
  return (
    <Link href={`blog/${slug}`} passHref>
      <a className="box-content grow flex flex-col w-full -mx-4 px-4 py-5 rounded-xl transition dark:active:bg-active dark:md:hover:bg-active active:bg-activeLight md:hover:bg-activeLight md:box-border md:w-1/2">
        <Image
          alt={image}
          draggable="false"
          className="object-cover rounded-xl"
          src={image}
          height={3}
          width={5}
          layout="responsive"
        />
        <h1 className="text-2xl font-bold mt-2 md:mt-4 md:truncate">{title}</h1>
        <p className="hidden dark:text-stone-200 text-stone-700 text-base leading-7 lg:flex mt-4">
          {description}
        </p>
        <p className="text-accent dark:text-accentLight text-sm font-semibold mt-2 lg:mt-6">
          {date}
        </p>
      </a>
    </Link>
  );
};

export default ArticleCard;
