import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ text, href }) => {
  const router = useRouter();
  const path = '/' + router.pathname.split('/')[1];
  return (
    <Link href={href}>
      <a
        className={`${
          path === href ? 'active' : ''
        } border-orange-600 md:transition-all md:hover:border-b-4`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;
