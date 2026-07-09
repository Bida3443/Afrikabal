"use client"

import BackgroundGlow from '@/components/home/background'
import Image from "next/image";

import logo from "../public/Logo.png";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
// import { text } from "stream/consumers";


 
const navv = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Features",
    link: "/features",
  },
  {
    text: "Partners",
    link: "/partners",
  },
  {
    text: "About Us",
    link: "/about"
  },
];


export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

const toggleMenu = () => {
  setIsOpen(!isOpen);
};
  return (
    <nav className=" p-5  bg-[#F9F2DA] w-full z-20 max-h-screen sticky top-0 h-full border border-b-[#8B8B8B] ">
        <BackgroundGlow />
      <div className="flex flex-row justify-between items-center  lg:px-20 px-5">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo Image"
            width={300}
            height={300}
            className="w-25 h-15"
          />
        </Link>

        {/* Lg NavBar */}
        <div className="text-black hidden lg:block  items-center gap-8">
          <div className="flex gap-5 items-center">
            {navv.map((item, index) => (
              <div
                key={index}
                className="hover:text-[#F0BD09] transition-all duration-300"
              >
                <Link href={item.link} className={`${
        pathname === item.link
          ? 'text-[#F0BD09] font-bold'
          : 'text-gray-500'
      }`}>
                  {item.text}
                </Link>
              </div>
            ))}
            <a
              href="/contact"
              className="bg-[#F0BD09] transition-all duration-300 hover:bg-amber-50 hover:font-bold hover:text-[#F0BD09] p-2 text-white lg:text-[15px] flex items-center  px-8 rounded-xl"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Hamburger NavBar */}

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isOpen ? (
              /* X ICON */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-7 w-7 fill-[#F0BD09] "
              >
                <path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s-12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z" />
              </svg>
            ) : (
              /* HAMBURGER */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-7 w-7 fill-[#F0BD09]"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            )}
          </button>

             </div>
                <div
                    className={`lg:hidden fixed top-25 left-0  w-70 bg-[#F9F2DA]   
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

  <div className="p-6 mt-1">
    <div className="text-black block  items-center gap-8">
          <div className="flex flex-col gap-5 items-center">
            {navv.map((item, index) => (
              <div
                key={index}
                className="hover:text-[#F0BD09] transition-all duration-300"
              >
                <Link href={item.link} className={`${
        pathname === item.link
          ? 'text-[#F0BD09] font-bold'
          : 'text-gray-500'
      }`} >
                  {item.text}
                </Link>
              </div>
            ))}
            <a
              href="/contact"
              className="bg-[#F0BD09] transition-all duration-300 hover:bg-amber-50 hover:font-bold hover:text-[#F0BD09] p-2 text-white lg:text-[15px] flex items-center  px-8 rounded-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
  </div>

        </div>
      </div>
    </nav>
  );
}
  

