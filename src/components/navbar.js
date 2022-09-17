import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NavItem, BurgerIcon } from './navItem';
import { links } from '../data';

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const menuBottom = `${
    navActive ? 'active' : ''
  } flex flex-col fixed h-fit -bottom-[244px] left-0 right-0 gap-4 p-5 rounded-t-2xl md:h-fit bg-footer-dark md:bg-primary-dark transition-all duration-300 md:p-0 md:gap-8 md:flex-row md:static`;
  const menuSide = `${
    navActive ? 'active' : ''
  } flex flex-col fixed h-fit -bottom-[244px] left-0 right-0 gap-4 py-5 px-3 rounded-t-2xl md:h-fit bg-footer-dark md:bg-primary-dark transition-all duration-300 md:p-0 md:gap-8 md:flex-row md:static`;
  return (
    <header className="fixed z-[100] top-0 w-full bg-primary-dark h-[76px] md:h-[108px]">
      <nav className="container__global relative gap-2 justify-between items-center">
        <Link href="/">
          <a
            onClick={() => setNavActive(false)}
            className="relative w-[140px] md:w-[160px] h-full"
          >
            <Image
              alt=""
              draggable="false"
              className="object-contain"
              src="/logo.svg"
              layout="fill"
            />
          </a>
        </Link>
        <BurgerIcon
          className={`${navActive ? 'opened' : ''} md:hidden cursor-pointer`}
          onClick={() => setNavActive(!navActive)}
        />
        <div className={menuBottom}>
          {links.map(link => (
            <Link href={link.href} key={link.text}>
              <div onClick={() => setNavActive(false)}>
                <NavItem {...link} />
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
