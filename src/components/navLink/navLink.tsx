import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, label, className = '' }) => {
  return (
    <Link href={href} className={`text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita ${className}`}>
      {icon}
      <p className="text-sm md:text-lg">{label}</p>
    </Link>
  );
};

export default NavLink;
