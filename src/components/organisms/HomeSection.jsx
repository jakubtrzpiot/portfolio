import Link from 'next/link';
import Image from 'next/image';

const HomeSection = () => {
  return (
    <div>
      <div className="section relative">
        <div className="col-span-full flex flex-col md:col-span-6 md:col-start-2 lg:col-span-5 lg:py-20">
          <h3 className="section__special">Web Developer</h3>
          <h1 className="section__header">
            Hi! I Am <span>Kuba Trzpiot</span>
          </h1>
          <p className="section__text mr-20">
            Lorem ipsum is a dummy text used in laying out print, graphic or web
            designs.
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
          <Image
            alt=""
            src="/assets/social-media.svg"
            width={689}
            height={585}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
