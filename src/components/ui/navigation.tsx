'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <nav className="w-full text-sm flex items-center space-x-1">
      <span className="text-gray-500">&gt;</span>
      <Link
        href="/"
        className="text-green-400 hover:text-green-300 transition-colors"
      >
        Home
      </Link>
      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        return (
          <span key={path} className="flex items-center space-x-1">
            <span className="text-gray-500">/</span>
            <Link
              href={href}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              {path}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Navigation;
