import NavBar from "./components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex grow h-screen">

      
        <div className="mx-50 mt-30 w-200 p-10">
          <h1 className="text-2xl mb-10">Hi, my name is</h1>
          <h1 className="text-6xl text-amber-900 mb-5">Nikki Tjiputra</h1>
          <h1 className="text-3xl mb-5">University of Maryland | Computer Science</h1>
          <h1>I'm an aspiring software engineer with strong foundations in full-stack 
            development, machine learning, and data processing. I'm passionate about 
            building impactful software that balances innovation with reliability and 
            sustainability.</h1>
        </div>
        <div className="flex justify-end items-end grow h-full">
          <Image src="/flowers.png" width="500" height="500" alt="Flowers"></Image>
        </div>
      </div>
      
    </div>
  );
}
