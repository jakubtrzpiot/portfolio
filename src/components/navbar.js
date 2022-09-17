import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import NavItem from './navItem';
import { links } from '../data';

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  return (
    <header className="fixed z-[100] top-0 w-full bg-primary-dark h-[76px] md:h-[108px]">
      <nav className="container__global relative gap-2 justify-between items-center">
        <Link href="/">
          <a className="relative w-[140px] md:w-[160px] h-full">
            <Image
              draggable="false"
              className="object-contain"
              src="/logo.svg"
              layout="fill"
            />
          </a>
        </Link>
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setNavActive(!navActive)}
        >
          =
        </div>
        <div
          className={`${
            navActive ? 'active' : ''
          } flex flex-col fixed h-full top-[76px] -right-[240px] gap-4 py-6 px-20 w-[240px] md:w-fit bg-primary-dark transition-all duration-500 md:px-0 md:gap-8 md:flex-row md:static`}
        >
          {links.map(link => (
            <div onClick={() => setNavActive(false)} key={link.text}>
              <NavItem {...link} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
