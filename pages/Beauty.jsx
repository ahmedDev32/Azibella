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
        <title> Azibella beauty section</title>
        <meta name="description" content="Welcome to Beauty Haven" />
      </Head>

      <header class="bg-gray-100 py-4 md:py-2">
  <h1 class="text-center text-xl font-bold md:text-2xl">Aziibella Beauty Tools</h1>
</header>

      <div className="relative">
        <Image
          src="/images/Beauty.jpg"
          alt="Foreground image"
          layout="fill"
          className="object-cover z-10 md:max-w-full h-xl md:h-xl"
        />
        <section className="hero min-h-[60vh] bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
          {/* Content can be added here if needed, positioned absolutely */}
        </section>
      </div>

      <header class=" py-4 md:py-2">
  <h1 class="text-center text-xl font-bold md:text-3xl">Explore Beauty Tools</h1>
</header>
<div className="container mx-auto px-4 py-8">

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Category 1 */}
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <a
            href="/Products?p=Eyelash Tweezers"
            className="block px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            Eyelash Tweezers
          </a>
        </li>
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <a
            href="/Products?p=Paper Coated Tweezers"
            className="block px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            Paper Coated Tweezers
          </a>
        </li>
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <a
            href="/Products?p=Fiber Tip Tweezers"
            className="block px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            Fiber Tip Tweezers
          </a>
        </li>
        
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <button
            type="button"
            onClick={() => toggleDropdown('category1')}
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            <span>Manicure & Pedicure</span>
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
                href="/Products?p=Cuticle Nipper"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Cuticle Nippers
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Nail Pincher"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Nail Pincher
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Nail Pusher"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Nail Pusher
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Manicure Pedicure Kits"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Manicure Pedicure Kits
              </a>
            </li>
          </ul>
        </li>

        {/* Category 3 */}
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <button
            type="button"
            onClick={() => toggleDropdown('category3')}
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            <span>Shaving Tools</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`h-4 w-4 fill-current ${
                openDropdown === 'category3' ? 'transform rotate-180' : ''
              } text-gray-600 transition-transform duration-300`}
            >
              <path fillRule="evenodd" d="M12 17l6-6H6l6 6z" />
            </svg>
          </button>
          {/* Dropdown content for Category 3 */}
          <ul
            className={`${
              openDropdown === 'category3' ? 'block' : 'hidden'
            } bg-white shadow-md rounded-md py-2 px-3 mt-1`}
          >
            <li>
              <a
                href="/Products?p=Shaving kits"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Shaving Kits
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Shaving Bowls & Brush"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Shaving Bowls & Brush
              </a>
            </li>
          </ul>
        </li>
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <button
            type="button"
            onClick={() => toggleDropdown('category4')}
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            <span>Eyelash Instruments</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`h-4 w-4 fill-current ${
                openDropdown === 'category4' ? 'transform rotate-180' : ''
              } text-gray-600 transition-transform duration-300`}
            >
              <path fillRule="evenodd" d="M12 17l6-6H6l6 6z" />
            </svg>
          </button>
          {/* Dropdown content for Category 3 */}
          <ul
            className={`${
              openDropdown === 'category4' ? 'block' : 'hidden'
            } bg-white shadow-md rounded-md py-2 px-3 mt-1`}
          >
            <li>
              <a
                href="/Products?p=Eyelash Applicators"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Eyelash Applicators
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Eyelash & Eyebrow Scissors"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Eyelash & Eyebrow Scissors
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Mirrors for Eyelash Extensions"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Mirrors,Eyelsh Extensions
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Eyebrow Tweezers"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Eyelash Tweezers
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Lash Lifting Tools"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Lash Lifitng Tools
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Packaging"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Packaging
              </a>
            </li>
          </ul>
        </li>
        <li className="rounded-lg overflow-hidden border border-gray-200">
          <button
            type="button"
            onClick={() => toggleDropdown('category5')}
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            <span>Barber Instruments</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`h-4 w-4 fill-current ${
                openDropdown === 'category5' ? 'transform rotate-180' : ''
              } text-gray-600 transition-transform duration-300`}
            >
              <path fillRule="evenodd" d="M12 17l6-6H6l6 6z" />
            </svg>
          </button>
          {/* Dropdown content for Category 3 */}
          <ul
            className={`${
              openDropdown === 'category5' ? 'block' : 'hidden'
            } bg-white shadow-md rounded-md py-2 px-3 mt-1`}
          >
            <li>
              <a
                href="/Products?p=Hair Cutting Scissors"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Hair Cutting Scissors
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Thinning Scissors"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Thinning Scissors
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Double Edge Safety Razor"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Double Edge Safety Razor
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Shaving Razors"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Shaving Razors
              </a>
            </li>
            <li>
              <a
                href="/Products?p=Finger Razors"
                className="text-gray-700 hover:text-blue-500 block"
              >
                Finger Razors
              </a>
            </li>
          </ul>
        </li>
        {/* Add more categories as needed */}
      </ul>
    </div>
    <Footer/>
    </div>
  );
}
