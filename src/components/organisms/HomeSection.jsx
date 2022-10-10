import Link from 'next/link';
import { Mobile } from '../atoms/Illustrations';

const HomeSection = () => {
  return (
    <div className="container flex flex-col min-h-[calc(100vh-80px)] py-10">
      <h3 className="mb-4 text-base md:text-lg xl:text-xl font-bold text-accent dark:text-accentLight">
        Full Stack Developer
      </h3>
      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6 lg:mb-10">
        {`Hi, I'm Kuba Trzpiot`}
      </h1>
      <p className="text-base md:text-xl leading-8 md:leading-9 text-disabled dark:text-[#aaa] mb-8 lg:mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        dolor enim sed id, nobis assumenda odit totam cum numquam ratione!
      </p>
      <div className="flex gap-6 text-base">
        <Link href="/#contact" scroll={false}>
          <button className="py-4 px-8 lg:hover:scale-105 transition-all bg-accent dark:bg-accentLight/80 text-white rounded-xl">
            Hire Me!
          </button>
        </Link>
        <Link href="/#contact" scroll={false}>
          <button className="py-4 px-8 lg:hover:scale-105 transition-all bg-accent/10 dark:bg-accentLight/20 text-accent dark:text-white rounded-xl">
            Get in Touch
          </button>
        </Link>
      </div>
      <div className="flex grow pt-10">
        <Mobile />
      </div>
    </div>
  );
};

export default HomeSection;
