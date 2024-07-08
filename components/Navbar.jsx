import React, { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const handleLinkClick = () => {
    setMenu(false);
  };

  return (
    <>
      <nav className="w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-sm">
        <div className="w-full text-center p-2 bg-sky-300 text-sm text-white">
          Expand Your Shopping Journey With Our Amazing Products
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 bg-white">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/logo.png" className="h-12" alt="Azibella Logo" />
            <span className="self-center text-lg font-semibold whitespace-nowrap text-black">Aziibella Surgical</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button onClick={() => router.push("/Cart")} className="p-3 text-black text-lg font-medium rounded-lg mx-1 py-1 text-center hover:text-sky-400">
              <FaShoppingCart />
            </button>
            <button onClick={() => router.push("/Login")} className="text-black text-lg font-medium rounded-lg mx-1 py-1 text-center hover:text-sky-400">
              <FaUser />
            </button>
            <button
              onClick={() => setMenu(!menu)}
              type="button"
              className={`inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${menu ? 'transform translate-x-0' : 'transform -translate-x-full'} transition-transform duration-300 ease-in-out`}
              aria-controls="navbar-sticky"
              aria-expanded={menu ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`fixed top-0 left-0 h-full bg-white z-30 md:static md:flex md:w-auto md:order-1 md:translate-x-0 ${menu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`} id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 space-y-4 md:space-y-0 md:flex-row md:space-x-6 md:mt-0 md:p-0">
              <li>
                <Link href="/" className="block py-2 px-4 text-black rounded hover:text-sky-400" aria-current="page" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="block py-2 px-4 text-black rounded hover:text-sky-400" aria-current="page" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/Beauty" className="block py-2 px-4 text-black rounded hover:text-sky-400" onClick={handleLinkClick}>
                  Beauty
                </Link>
              </li>
              <li>
                <Link href="/Surgical" className="block py-2 px-4 text-black rounded hover:text-sky-400" onClick={handleLinkClick}>
                  Surgical & Dental
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="block py-2 px-4 text-black rounded hover:text-sky-400" onClick={handleLinkClick}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
