import React from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex z-20 flex-col h-screen">
        <NavBar className="self-start" />
        <div className="z-20 flex grow">
            <div className="flex flex-col mt-30 font-serif mx-5 p-5 md:mt-20 md:mx-20">
                <h1 className="text-5xl mb-10 text-amber-900 md:text-5xl md:mb-10">About</h1>
                <h1 className="text-2xl md:text-3xl mb-5">Hello, and thank you for visiting my page!</h1>
                <p className="text-lg md:text-xl md:w-200 mb-5">
                    I'm currently a computer science student at the University of Maryland and aspiring software engineer with
                    an interest in cybersecurity and data science. Throughout my time at UMD in the computer science program as 
                    well as in College Park Scholars: Environment, Technology, and Economy, I have truly learned how much 
                    technology can be used to connect our community through sustainability, equity, and accessibility. Throughout 
                    my journey through the tech world, I hope to use my privilege and role as an engineer and developer to create 
                    meaningful software that impacts real people. 
                </p>
                <p className="text-lg md:text-xl md:w-2/3">Outside of tech, some of my hobbies include playing sports, hiking, playing the guitar, and trying new restaurants.</p>
            </div>
        </div>
        
    </div>
  )
}

export default About