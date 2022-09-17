import Image from 'next/image';
import Link from 'next/link';

const ArticleCard = ({ url, title, image, content, date }) => {
  // na tablecie zrobic img z lewej
  return (
    <Link href={`/blog/article/${url}`}>
      <a className="box-content lg:box-border flex w-full xl:w-1/2 flex-col gap-2 md:gap-4 py-4 px-3 -mx-3 rounded-xl active:bg-[#363636] md:hover:bg-[#363636] transition ">
        <div className="relative grow h-[240px] sm:h-[340px]">
          <Image
            alt=""
            draggable="false"
            className="object-cover rounded-xl"
            src={image}
            layout="fill"
          />
        </div>
        <h1 className="truncate">{title}</h1>
        <p className="text-accent text-sm font-semibold">{date}</p>

        <div className="hidden grow md:flex">{content}</div>
      </a>
    </Link>
  );
};

export default ArticleCard;
