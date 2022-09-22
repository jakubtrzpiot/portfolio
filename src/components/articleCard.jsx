import Image from 'next/image';
import Link from 'next/link';

const ArticleCard = ({ slug, title, image, description, date }) => {
  return (
    <Link href={slug} passHref>
      <a className="box-content grow flex flex-col w-full -mx-3 px-3 py-5 rounded-xl transition dark:active:bg-active dark:md:hover:bg-active active:bg-activeLight md:hover:bg-activeLight md:box-border md:w-1/2">
        <Image
          alt={image}
          draggable="false"
          className="object-cover rounded-xl"
          src={image}
          height={3}
          width={5}
          layout="responsive"
        />
        <h1 className="pt-2 md:truncate md:pt-4">{title}</h1>
        <p className="text-accent text-sm font-semibold pt-1 md:pt-2">{date}</p>
        <div className="hidden md:flex pt-4">{description}</div>
      </a>
    </Link>
  );
};

export default ArticleCard;
