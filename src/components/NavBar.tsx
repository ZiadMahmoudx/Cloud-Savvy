import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-4 lg:p-8">
        <Link href="/">
          <p className="text-xl font-bold">Cloud Savvy</p>
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link href="/performance">
              <p className="hover:text-gray-400">Performance</p>
            </Link>
          </li>
          <li>
            <Link href="/reliability">
              <p className="hover:text-gray-400">Reliability</p>
            </Link>
          </li>
          <li>
            <Link href="/scale">
              <p className="hover:text-gray-400">Scale</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
