import Link from 'next/link';
import Image from 'next/image';
import icon from '/public/assets/icon.svg';
import { useState } from 'react';
import { NavItem, BurgerIcon, DarkModeToggle, LogoText } from './navItem';

const links = [
  { text: 'Home', href: '/' },
  { text: 'About Me', href: '/about' },
  { text: 'Blog', href: '/blog' },
  { text: 'Projects', href: '/projects' },
  { text: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  return (
    <header className="fixed z-[100] top-0 w-full dark:bg-dark bg-light py-5">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/" passHref>
            <a
              className="flex items-center gap-3"
              onClick={() => setNavActive(false)}
            >
              <Image alt="icon" src={icon} />
              <LogoText />
            </a>
          </Link>
        </div>
        <BurgerIcon
          className={`${navActive ? 'opened' : ''} md:hidden cursor-pointer`}
          onClick={() => setNavActive(!navActive)}
        />
        <div
          className={`${
            navActive ? 'active' : ''
          } menu md:m-0 md:flex-row md:static md:items-center md:h-fit md:w-fit md:dark:bg-dark md:bg-light md:p-0 md:transition-none md:gap-6 lg:gap-8 xl:gap-10 md:drop-shadow-none`}
        >
          {links.map(link => (
            <NavItem
              {...link}
              onClick={() => setNavActive(false)}
              key={link.text}
            />
          ))}
          {/* check toggle when light mode is first */}
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
