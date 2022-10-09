import Link from 'next/link';
import Image from 'next/image';

const HomeSection = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)] lg:h-fit py-10 gap-10">
      <div className="lg:w-1/2 lg:mt-24 h-fit">
        <h3 className="mb-4 text-base md:text-lg xl:text-xl font-bold text-accent dark:text-accentLight">
          Full Stack Developer
        </h3>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6 lg:mb-10">
          {`Hi, I'm Kuba Trzpiot`}
        </h1>
        <p className="text-base md:text-xl leading-8 md:leading-9 text-disabled dark:text-[#aaa] mb-8 lg:mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          obcaecati ipsa rerum quia quo excepturi dolorum. Saepe obcaecati ipsa
          rerum quia quo excepturi dolorum.
        </p>
        <div className="flex gap-4 justify-between sm:justify-start">
          <Link href="/#contact" scroll={false}>
            <button className="w-full sm:w-fit bg-accent dark:bg-accentLight/80 px-12 lg:px-14 py-5 text-white rounded-xl">
              Hire Me!
            </button>
          </Link>
          <Link href="/#contact" scroll={false}>
            <button className="w-full sm:w-fit bg-accent/10 dark:bg-accentLight/20 text-accent dark:text-white px-6 py-5 rounded-xl">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
      <div className="flex lg:hidden relative w-full h-full">
        <Image src="/assets/mobile.svg" layout="fill" />
      </div>
      <div className="hidden lg:flex relative w-1/2 mt-24">
        <Image src="/assets/desktop.svg" layout="fill" />
      </div>
    </div>
  );
};

export default HomeSection;
