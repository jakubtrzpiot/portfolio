import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '../atoms/ThemeToggle';
import HamburgerMenu from '../atoms/HamburgerMenu';

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  return (
    <header className="fixed z-[100] top-0 w-full dark:bg-dark bg-light py-5 lg:py-4">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-3 lg:gap-6">
          <Link href="/" passHref>
            <a
              className="text-2xl font-medium"
              onClick={() => setNavActive(false)}
            >
              trzpio.
              <span className="text-accent dark:text-accentLight">dev</span>
            </a>
          </Link>
          <ThemeToggle />
        </div>
        <HamburgerMenu
          className={`${navActive ? 'opened' : ''} lg:hidden cursor-pointer`}
          onClick={() => setNavActive(!navActive)}
        />
        <menu
          className={`${
            navActive ? 'active' : ''
          } transition-all duration-300 top-20 py-10 w-full h-full fixed -right-full touch-none dark:bg-dark bg-light lg:m-0 lg:static lg:h-fit lg:w-fit lg:dark:bg-dark lg:bg-light lg:p-0`}
        >
          <div
            className={`${
              navActive ? 'container' : ''
            } flex flex-col items-end gap-6 lg:flex-row lg:items-center lg:gap-8 xl:gap-10`}
          >
            <Link href="/" passHref>
              <a
                onClick={() => setNavActive(false)}
                className="link_before w-fit"
              >
                Home
              </a>
            </Link>
            <Link href="/#about" passHref scroll={false}>
              <a
                onClick={() => setNavActive(false)}
                className="link_before w-fit"
              >
                About Me
              </a>
            </Link>
            <Link href="/#projects" passHref scroll={false}>
              <a
                onClick={() => setNavActive(false)}
                className="link_before w-fit"
              >
                Projects
              </a>
            </Link>
            <Link href="/blog" passHref>
              <a
                onClick={() => setNavActive(false)}
                className="link_before w-fit"
              >
                Blog
              </a>
            </Link>
            <Link href="/#contact" passHref scroll={false}>
              <a
                onClick={() => setNavActive(false)}
                className="w-fit lg:text-white lg:py-2.5 lg:px-5 lg:bg-accent  lg:dark:bg-accentLight/80 lg:rounded-xl"
              >
                Contact
              </a>
            </Link>
          </div>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
