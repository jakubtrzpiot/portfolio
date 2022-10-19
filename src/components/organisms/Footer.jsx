import Icon from '../atoms/Icon';
import Logo from '../atoms/Logo';

const Footer = () => (
  <footer className="bg-white">
    <div className="border-t-2   border-secondary container flex gap-6 flex-col items-center justify-between pt-14 pb-14 sm:pb-20 sm:flex-row">
      <a className="min-h-[40px]" href="https://trzpiodev.vercel.app/">
        <Logo />
      </a>
      <div className="flex gap-6">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jakubtrzpiot"
        >
          <Icon name="github" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jakubtrzpiot"
        >
          <Icon name="linkedin" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
