import Link from 'next/link';
import Image from 'next/image';

const HomeSection = () => {
  return (
    <div className="flex flex-col lg:flex-row wrap h-[calc(100vh-80px)] pt-10 gap-10">
      <div className="basis-1/2 lg:mt-24">
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
        <div className="flex gap-4">
          <button className="bg-accent dark:bg-accentLight/80 px-12 lg:px-14 py-5 text-white rounded-xl">
            Hire Me!
          </button>
          <Link href="/#contact" scroll={false}>
            <button className="bg-accent/10 dark:bg-accentLight/20 text-accent dark:text-white  px-6 py-5 rounded-xl">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
      <div className="flex lg:hidden relative justify-center h-full">
        <Image src="/assets/mobile.svg" layout="fill" />
      </div>
      <div className="hidden lg:flex relative basis-1/2 justify-end">
        <Image src="/assets/desktop.svg" width={450} height={460} />
      </div>
    </div>
  );
};

export default HomeSection;
