import { GitHub, LinkedIn } from '../atoms/Illustrations';

const Footer = () => (
  <footer className="dark:bg-dark bg-light">
    <div className="border-t-2 dark:border-active border-activeLight container flex gap-6 flex-col items-center justify-between pt-14 pb-14 sm:pb-20 sm:flex-row">
      <a className="text-2xl font-medium" href="https://trzpiodev.vercel.app/">
        trzpio.
        <span className="text-accent dark:text-accentLight">dev</span>
      </a>
      <div className="flex gap-6">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jakubtrzpiot"
        >
          <GitHub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jakubtrzpiot"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
