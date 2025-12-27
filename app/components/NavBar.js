import React from 'react'
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="bg-orange-100 flex flex-row justify-center text-2xl py-5 pr-5">
        <Link className="mx-10 hover:text-shadow-lg" href="/">Home</Link>
        <Link className="mx-10 hover:text-shadow-lg" href="/about">About</Link>
        <Link className="mx-10 hover:text-shadow-lg" href="/experience">Experience</Link>
        <Link className="mx-10 hover:text-shadow-lg" href="/projects">Projects</Link>
        <Link className="mx-10 hover:text-shadow-lg" href="/contact">Contact</Link>
    </div>
  )
}

export default NavBar;