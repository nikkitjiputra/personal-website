"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //console.log(isOpen);
  return (
    <div>
      <nav className="md:hidden bg-orange-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className=" self-start">Nikki Tjiputra</Link>
          <div className="flex flex-col">
            <button id="menu-button" onClick={() => setIsOpen(!isOpen)} className="md:hidden self-end text-black">
              <Image src="/hamburger.png" width="15" height="15" alt="Menu" />
            </button>
            {isOpen &&
            <div id="menu" className="flex flex-col md:items-center mt-10 text-xl space-x-4">
              <Link href="/" className="text-black m-2">Home</Link>
              <Link href="/about" className="text-black m-2">About</Link>
              <Link href="/experience" className="text-black m-2">Experience</Link>
              <Link href="/projects" className="text-black m-2">Projects</Link>
              <Link href="/contact" className="text-black m-2">Contact</Link>
            </div>}
          </div>
          
        </div>
      </nav>

      <div className="hidden md:block bg-orange-100 flex flex-row justify-center text-2xl py-5 pr-5">
        <Link className="mx-10 hover:text-shadow-lg" href="/">Home</Link>
        <Link className="mx-10 hover:text-shadow-lg" href="/about">About</Link>
        <Link className="mx-10 hover:text-shadow-lg" href="/experience">Experience</Link>
        <Link className="mx-10 hover:text-shadow-lg" href="/projects">Projects</Link>
        <Link className="mx-10 hover:text-shadow-lg" href="/contact">Contact</Link>
      </div>

    </div>
    
  )
}

export default NavBar;