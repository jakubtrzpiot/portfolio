import Link from 'next/link';
import { useState, useEffect } from 'react';
import HamburgerMenu from '../atoms/HamburgerMenu';
import BackToTopButton from '../atoms/BackToTopButton';
import Logo from '../atoms/Logo';

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    let lastPos = window.scrollY;
    window.addEventListener('scroll', () => {
      let currentPos = window.scrollY;
      if (currentPos > lastPos + 100) {
        setHideNav(true);
        lastPos = window.scrollY;
      } else if (currentPos < lastPos) {
        setHideNav(false);
        lastPos = window.scrollY;
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
      } fixed z-[100] w-full bg-white py-6 lg:py-4`}
    >
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-3 lg:gap-6">
          <Link href="/" passHref>
            <a
              className="text-xl lg:text-[22px] font-medium"
              onClick={() => setNavActive(false)}
            >
              <Logo />
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
          } z-50 top-20 py-10 w-full h-full fixed -right-full touch-none   bg-white lg:m-0 lg:static lg:h-fit lg:w-fit lg:p-0`}
        >
          <div
            className={`flex flex-col items-end gap-6 lg:gap-3 lg:flex-row lg:items-center`}
          >
            <Link href="/" passHref>
              <a
                onClick={() => setNavActive(false)}
                className="link link_before w-fit"
              >
                Home
              </a>
            </Link>
            <Link href="/#about" passHref scroll={false}>
              <a
                onClick={() => setNavActive(false)}
                className="link link_before w-fit"
              >
                About Me
              </a>
            </Link>
            <Link href="/#projects" passHref scroll={false}>
              <a
                onClick={() => setNavActive(false)}
                className="link link_before w-fit"
              >
                Projects
              </a>
            </Link>
            <Link href="/blog" passHref>
              <a
                onClick={() => setNavActive(false)}
                className="link link_before w-fit"
              >
                Blog
              </a>
            </Link>
            <Link href="/#contact" passHref scroll={false}>
              <a
                onClick={() => setNavActive(false)}
                className="link lg:ml-12 w-fit hover:lg:scale-105 lg:transition-all text-primary lg:text-white lg:py-3 lg:px-6 lg:bg-primary"
              >
                Contact
              </a>
            </Link>
          </div>
        </menu>
      </nav>
      <BackToTopButton />
    </header>
  );
};

export default Navbar;
