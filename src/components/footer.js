import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-footer-dark py-10 md:pt-8 md:pb-14">
      <div className="container__global flex-wrap items-center justify-between md:gap-12 h-full">
        <a
          href="http://localhost:3000/"
          className="relative w-[140px] md:w-[160px] h-12 md:h-16"
        >
          <Image
            alt=""
            draggable="false"
            className="object-contain"
            src="/logo.svg"
            layout="fill"
          />
        </a>
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          <a
            className="w-10 h-10 md:w-12 md:h-12 relative"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jakubtrzpiot"
          >
            <Image
              alt=""
              draggable="false"
              className="object-contain"
              src="/github.svg"
              layout="fill"
            />
          </a>
          <a
            className="w-10 h-10 md:w-12 md:h-12 relative"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jakubtrzpiot"
          >
            <Image
              alt=""
              draggable="false"
              className="object-contain"
              src="/linkedin.svg"
              layout="fill"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
