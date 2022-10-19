import Link from 'next/link';
import Image from 'next/image';

const HomeSection = () => {
  return (
    <div>
      {/* <div className="overflow-x-hidden absolute -right-[250px] -top-[250px]">
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="250"
            cy="250"
            r="248.5"
            stroke="#1E4593"
            stroke-width="3"
          />
        </svg>
      </div> */}
      <div className="section relative">
        <div className="col-span-full flex flex-col md:col-span-6 md:col-start-2 lg:col-span-5 lg:py-20">
          <h3 className="section__special">Web Developer</h3>
          <h1 className="section__header">
            Hi! I Am <span>Kuba Trzpiot</span>
          </h1>
          <p className="section__text mr-5">
            <span className="text-2xl lg:text-3xl">
              FRONT-END DEVELOPER<br></br>
            </span>
            aspiring to become a full-stack developer.
          </p>
          <div className="flex gap-6 lg:gap-8 flex-wrap">
            <Link href="/#contact" scroll={false}>
              <button className="py-5 px-10 lg:hover:scale-105 transition-all bg-primary  text-white font-medium">
                Get in Touch
              </button>
            </Link>
            <Link href="/#projects" scroll={false}>
              <button className="py-5 px-10 lg:hover:scale-105 transition-all bg-secondary   text-primary font-medium">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div className="pt-20 sm:pt-40 lg:py-0 col-span-full place-self-center lg:place-self-start lg:col-end-13 lg:col-span-6">
          <Image src="/assets/social-media.svg" width={689} height={585} />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
