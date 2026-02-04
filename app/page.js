"use client";
import NavBar from "./components/NavBar";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {

  return (
    <div className="flex flex-col z-20 relative h-screen ">
      <AnimatePresence>

      
      <div className="absolute inset-10 flex flex-col grow md:flex md:flex-row md:grow ">

        <div className="mr-10 p-5 mt-20 w-full md:mx-50 md:mt-40 md:w-1/2 md:pb-0 md:px-10 md:pt-10">
          <h1 className="mb-5 md:text-2xl font-serif md:mb-10">Hi, my name is</h1>
          <h1 className="text-5xl mb-5 font-serif md:text-6xl text-amber-900">Lauren (Nikki) Tjiputra</h1>
          <h1 className="text-xl mb-5 font-serif md:text-3xl">University of Maryland | Computer Science</h1>
          <h1 className="font-serif">I'm an aspiring software engineer with strong foundations in full-stack 
            development, machine learning, and data processing. I'm passionate about 
            building impactful software that balances innovation with reliability and 
            sustainability.</h1>
        </div>
      </div>
      </AnimatePresence>
      
    </div>
  );
}
