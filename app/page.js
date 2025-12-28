import NavBar from "./components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar className="" />
      <div className="flex flex-col grow h-screen md:flex md:flex-row md:grow md:h-screen">

      
        <div className="mr-10 p-5 mt-5 w-full md:mx-50 md:mt-40 md:w-1/2 md:p-10">
          <h1 className="mb-5 md:text-2xl md:mb-10">Hi, my name is</h1>
          <h1 className="text-5xl mb-3 md:text-6xl text-amber-900 md:mb-5">Nikki Tjiputra</h1>
          <h1 className="text-xl mb-3 md:text-3xl md:mb-5">University of Maryland | Computer Science</h1>
          <h1>I'm an aspiring software engineer with strong foundations in full-stack 
            development, machine learning, and data processing. I'm passionate about 
            building impactful software that balances innovation with reliability and 
            sustainability.</h1>
        </div>
        <div className="flex hidden md:block justify-end items-end grow md:h-full">
          <Image loading="eager" className="w-full h-auto rounded-xl md:w-auto md:h-auto" src="/flowers.png" width="500" height="500" alt="Flowers"></Image>
        </div>
      </div>
      
    </div>
  );
}
