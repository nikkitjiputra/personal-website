"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  

    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  //console.log(isOpen);
  return (
    <div className="">
      <nav className={`md:hidden fixed top-0 left-0 right-0 ${isOpen ? "z-15" : "z-5"}`}>
        <div className="flex flex-col h-screen">
          <div className="mx-auto w-full flex justify-between items-center p-5 bg-[oklch(98%_0.016_73.684)] bg-orange-100">
            <Link href="/" className="text-amber-900 font-serif self-start">
              <Image src="/flowericon.png" width="50" height="50" alt="Home"></Image>
            </Link>
            <button id="menu-button" onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
              <Image src="/hamburger.png" width="20" height="20" alt="Menu" />
            </button>
          </div>
          {isOpen &&
          
          <div id="menu" className="fixed inset-0 bg-[oklch(98%_0.016_73.684)] text-amber-900 flex font-sans flex-col bg-orange-100 h-screen mt-20 pl-10 text-lg space-x-4">
            <Link href="/" className="m-2">HOME</Link>
            <Link href="/about" className="m-2">ABOUT</Link>
            <Link href="/experience" className="m-2">EXPERIENCE</Link>
            <Link href="/projects" className="m-2">PROJECTS</Link>
            <Link href="/contact" className="m-2">CONTACT</Link>
          </div>}
          
        </div>
      </nav>

      <div className="hidden md:block md:flex md:flex-row md:justify-end font-sans text-xl py-5 pr-5">
        <Link className="mx-10 text-amber-900 hover:text-shadow-lg" href="/">HOME</Link>
        <Link className="mx-10 text-amber-900 hover:text-shadow-lg" href="/about">ABOUT</Link>
        <Link className="mx-10 text-amber-900 hover:text-shadow-lg" href="/experience">EXPERIENCE</Link>
        <Link className="mx-10 text-amber-900 hover:text-shadow-lg" href="/projects">PROJECTS</Link>
        <Link className="mx-10 text-amber-900 hover:text-shadow-lg" href="/contact">CONTACT</Link>
      </div>

    </div>
    
  )
}

export default NavBar;