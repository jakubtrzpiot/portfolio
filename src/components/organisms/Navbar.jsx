import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from '../atoms/ThemeToggle';
import HamburgerMenu from '../atoms/HamburgerMenu';
import BackToTopButton from '../atoms/BackToTopButton';

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    let lastPos = window.scrollY;
    window.addEventListener('scroll', () => {
      if (window.scrollY - lastPos >= 50) {
        lastPos = window.scrollY;
        setHideNav(true);
      } else if (lastPos - window.scrollY >= 50) {
        lastPos = window.scrollY;
        setHideNav(false);
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1023) {
        setNavActive(false);
      }
    });
  }, []);
  return (
    <header
      className={`${
        !navActive && hideNav ? '-top-20' : 'top-0'
      } fixed z-[100] w-full dark:bg-dark bg-light py-6 lg:py-4`}
    >
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-3 lg:gap-6">
          <Link href="/" passHref>
            <a
              className="text-xl lg:text-[22px] font-medium"
              onClick={() => setNavActive(false)}
            >
              trzpio.
              <span className="text-accent dark:text-accentLight">dev</span>
            </a>
          </Link>
        </div>
        <HamburgerMenu
          className={`${navActive ? 'opened' : ''} lg:hidden cursor-pointer`}
          onClick={() => setNavActive(!navActive)}
        />
        <menu
          className={`${
            navActive ? 'active' : ''
          } z-50 top-20 py-10 w-full h-full fixed -right-full touch-none dark:bg-dark bg-light lg:m-0 lg:static lg:h-fit lg:w-fit lg:dark:bg-dark lg:bg-light lg:p-0`}
        >
          <div
            className={`flex flex-col items-end gap-6 lg:gap-3 lg:flex-row lg:items-center`}
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
                className="w-fit hover:lg:scale-105 lg:transition-all dark:text-accentLight text-accent lg:dark:text-white lg:text-white lg:py-3 lg:px-5 lg:bg-accent  lg:dark:bg-accentLight/80 lg:rounded-xl"
              >
                Contact
              </a>
            </Link>
            <ThemeToggle className="flex lg:hidden" />
          </div>
        </menu>
      </nav>
      <BackToTopButton />
    </header>
  );
};

export default Navbar;
