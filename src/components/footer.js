import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-footer-dark pt-8 pb-14">
      <div className="container__global flex-wrap justify-between items-center gap-4 h-full">
        <Link href="/">
          <a className="relative w-[140px] md:w-[160px] h-12 md:h-16">
            <Image
              draggable="false"
              className="object-contain"
              src="/logo.svg"
              layout="fill"
            />
          </a>
        </Link>
        <div className="flex gap-4 flex-wrap justify-center">
          <a target="_blank" href="https://github.com/jakubtrzpiot">
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jakub-trzpiot-702b65215/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
