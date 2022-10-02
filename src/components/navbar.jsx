import Link from 'next/link';
import { useState } from 'react';
import { BurgerIcon, DarkModeToggle } from './navitems';

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  return (
    <header className="fixed z-[100] top-0 w-full dark:bg-dark bg-light py-5">
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
          <DarkModeToggle />
        </div>
        <BurgerIcon
          className={`${navActive ? 'opened' : ''} lg:hidden cursor-pointer`}
          onClick={() => setNavActive(!navActive)}
        />
        <div
          className={`${
            navActive ? 'active' : ''
          } transition-all lg:transition-none duration-300 ease-out top-20 py-10 w-full h-full fixed -right-full touch-none dark:bg-dark bg-light lg:m-0 lg:static lg:h-fit lg:w-fit lg:dark:bg-dark lg:bg-light lg:p-0`}
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
                className="lg:py-2.5 lg:px-6 w-fit"
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
