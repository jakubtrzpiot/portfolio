import Image from 'next/image';
import Link from 'next/link';

const ArticleCard = ({ url, title, image, content, date }) => {
  return (
    <Link href={`/blog/article/${url}`}>
      <a className="box-content grow flex flex-col w-full -mx-3 px-3 py-5 rounded-xl transition active:bg-active md:hover:bg-active md:box-border md:basis-1/2">
        <Image
          alt={image}
          draggable="false"
          className="object-cover rounded-xl"
          src={image}
          height={3}
          width={5}
          layout="responsive"
        />
        <h1 className="pt-2 md:pt-4">{title}</h1>
        <p className="text-accent text-sm font-semibold pt-1 md:pt-2">{date}</p>
        <div className="hidden md:flex pt-4">{content}</div>
      </a>
    </Link>
  );
};

export default ArticleCard;
