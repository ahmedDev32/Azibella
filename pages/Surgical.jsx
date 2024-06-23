import Head from 'next/head';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';


export default function Home() {
    const [openDropdown, setOpenDropdown] = useState(null);

    // Function to toggle the dropdown for a specific category
    const toggleDropdown = (category) => {
      setOpenDropdown(openDropdown === category ? null : category);
    };
  return (
    <div>
      <Head>
        <title>Beauty Haven</title>
        <meta name="description" content="Welcome to Beauty Haven" />
      </Head>

      <header class="bg-gray-100 py-4 md:py-2">
  <h1 class="text-center text-xl font-bold md:text-2xl">Aziibella Dental & Surgical Products</h1>
</header>
      <div className="relative">
        <Image
          src="/images/about.jpg"
          alt="Foreground image"
          layout="fill"
          className="object-cover z-10"
        />
        <section className="hero min-h-[60vh] bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
          {/* Content can be added here if needed, positioned absolutely */}
        </section>
      </div>

      <header class=" py-4 md:py-2">
  <h1 class="text-center text-xl font-bold md:text-3xl">Explore Dental & Surgical Categories</h1>
</header>
<div className="container mx-auto px-4 py-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Category 1 */}
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <a
            href="/Products?p=ORTHOPEDIC INSTRUMENTS"
            className="block px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            Orthopedic Instruments
          </a>
        </li>
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <a
            href="/Products?p=Cardiovascular"
            className="block px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            Carddiovascular
          </a>
        </li>
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <a
            href="/Products?p=Gynecology"
            className="block px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            Gynecology
          </a>
        </li>
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <a
            href="/Products?p=Needle Holder"
            className="block px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            Needle Holder
          </a>
        </li>
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <a
            href="/Products?p=Retractors"
            className="block px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            Retractors
          </a>
        </li>
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <button
            type="button"
            onClick={() => toggleDropdown('category1')}
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            <span>Dental Instruments</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`h-4 w-4 fill-current ${
                openDropdown === 'category1' ? 'transform rotate-180' : ''
              } text-gray-600 transition-transform duration-300`}
            >
              <path fillRule="evenodd" d="M12 17l6-6H6l6 6z" />
            </svg>
          </button>
          {/* Dropdown content for Category 1 */}
          <ul
            className={`${
              openDropdown === 'category1' ? 'block' : 'hidden'
            } bg-white shadow-md rounded-md py-2 px-3 mt-1`}
          >
            <li>
              <a
                href="/Products?p=Mouth Mirrors"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Mouth Mirrors
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Dental Curettes"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Dental Curettes
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Diagnostics"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Diagnostics
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <Footer/>
    </div>
  );
}

