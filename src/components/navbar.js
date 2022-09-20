import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/assets/logo.svg';
import { useState } from 'react';
import { NavItem, BurgerIcon } from './navItem';

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
    <header className="fixed z-[100] top-0 w-full dark:bg-primaryDark py-5">
      <nav className="container flex items-center justify-between">
        <Link href="/" passHref>
          <a>
            <Image
              className="cursor-pointer"
              onClick={() => setNavActive(false)}
              alt="logo"
              src={logo}
            />
          </a>
        </Link>
        <BurgerIcon
          className={`${navActive ? 'opened' : ''} md:hidden cursor-pointer`}
          onClick={() => setNavActive(!navActive)}
        />
        <div
          className={`${
            navActive ? 'active' : ''
          } menu md:flex-row md:static md:h-fit md:w-fit md:dark:bg-primaryDark md:p-0 md:transition-none md:gap-6 lg:gap-8 xl:gap-10`}
        >
          {links.map(link => (
            <NavItem
              {...link}
              onClick={() => setNavActive(false)}
              key={link.text}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
