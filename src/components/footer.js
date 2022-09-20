import Image from 'next/image';
import github from '/public/assets/github.svg';
import linkedin from '/public/assets/linkedin.svg';
import logo from '/public/assets/logo.svg';

const Footer = () => {
  return (
    <footer className="dark:bg-footerDark pt-14 pb-14 sm:pb-20">
      <div className="container flex gap-6 flex-col items-center justify-between sm:flex-row">
        <a href="https://trzpiodesign.vercel.app/">
          <Image alt="logo" draggable="false" src={logo} />
        </a>
        <div className="flex gap-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jakubtrzpiot"
          >
            <Image alt="github/jakubtrzpiot" draggable="false" src={github} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jakubtrzpiot"
          >
            <Image
              alt="linkedin/jakubtrzpiot"
              draggable="false"
              src={linkedin}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
