import React from 'react'
import NavBar from '../components/NavBar';
import Image from 'next/image';

const Experience = () => {
  return (
    <div>
        <NavBar />
        <div className="mt-10 mx-10">
            <h1 className="text-5xl mb-10">Experience</h1>

            <h1 className="text-3xl">Internship Experience</h1>
            <div className="ml-5 md:ml-10">
            <h1 className="text-2xl mt-5">TechStart Intern</h1>
            <h5 className="text-lg ">Liberty Mutual Insurance Group | June 2025 - August 2025</h5>
            <ul className=" space-y-1 list-disc list-inside">
                <li>Collaborated on a team developing internal tools and threat mitigation features used by Liberty Mutual engineers.</li>
                <li>Participated in agile development sprints, contributing to software development through iterative ticket-based tasks.</li>
                <li>Created a new feature in a search results interface by modifying backend logic and database query parameters.</li>
                <li>Implemented a custom LazyPromise utility in JavaScript to defer asynchronous execution until explicitly triggered, improving control over resource-intensive operations.</li>
            </ul>

            <h1 className="text-2xl  mt-5">Software Engineer Intern</h1>
            <h5 className="text-lg ">University of Maryland - Department of Astronomy | June 2023 - Present</h5>
            <ul className=" space-y-1 list-disc list-inside">
                <li>Contribute to software tools supporting comet data analysis and research for the Minor Planet Center.</li>
                <li>Contributed to a presentation at the Astronomical Data Analysis Software and Systems (ADASS) Conference 2023.</li>
                <li>Engineered a data visualization program to analyze observatory observations from 1500 C.E., graphing trends over time.</li>
                <li>Created a interactive map of all IAWN signatories using the Google Maps and Google Sheets API.</li>
            </ul>

            <h1 className="text-2xl  mt-5">Spectroscopy Machine Learning Intern</h1>
            <h5 className="text-lg ">NASA Goddard Flight Center | June 2023 - October 2024</h5>
            <ul className=" space-y-1 list-disc list-inside">
                <li>Generated spectral datasets with NASA's Planetary Spectrum Generator for CLuHME, an ML-driven mineral classifier.</li>
                <li>Analyzed lunar mineral spectra, including Pyroxene, Anorthosite, Plagioclase, and more, to aid in automated classification.</li>
                <li>Researched spectral features of asteroids to develop ML-based classification models for asteroid composition analysis.</li>
            </ul>

            <h1 className="text-2xl  mt-5">Machine Learning Research Intern</h1>
            <h5 className="text-lg ">University of Maryland - Department of Computer Science | June 2023 - August 2023</h5>
            <ul className=" space-y-1 list-disc list-inside">
                <li>Researched contributing factors to adult income prediction using SHAP explainability techniques.</li>
                <li>Conducted comparative analysis of results using linear regression models versus neural networks.</li>
                <li>Investigated bias related to gender and race and proposed mitigation strategies through model refinement.</li>
            </ul>
            </div>

            <h1 className="text-3xl mt-10">Relevant Coursework</h1>

            <div className="flex flex-wrap ml-5 md:ml-10 text-lg md:text-xl">
                <h1 className="mt-2 md:mt-5 grow-1">Object Oriented Programming I and II</h1>
                <h1 className="mt-2 md:mt-5 grow-1">Introduction to Computer Systems</h1>
                <h1 className="mt-2 md:mt-5 grow-1">Discrete Structures</h1>
                <h1 className="mt-2 md:mt-5 grow-1">Organization of Programming Languages</h1>
                <h1 className="mt-2 md:mt-5 grow-1">Algorithms</h1>
                <h1 className="mt-2 md:mt-5 grow-1">Web Application Development with JavaScript</h1>
                <h1 className="mt-2 md:mt-5 grow-1">Introduction to Go</h1>
                <h1 className="mt-2 md:mt-5 grow-1">Object Oriented Programming I and II</h1>
            </div>

            <h1 className="text-3xl mt-10">Skills</h1>
            <div className="grid grid-cols-2 mt-5 md:grid-cols-4 gap-10 md:mt-5 items-end text-center md:mx-40 text-xl mb-20">
                <div className="flex flex-col items-center">
                    <Image className="" src="/java.svg" alt="Java Logo" width={50} height={50}></Image>
                    <h1 className="mt-5">Java</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/python.png" alt="Python Logo" width={50} height={50}></Image>
                    <h1 className="mt-5">Python</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/javascript.svg" alt="Javascript Logo" width={50} height={50}></Image>
                    <h1 className="mt-5">Javascript</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/html.png" alt="HTML Logo" width={50} height={50}></Image>
                    <h1 className="mt-5">HTML</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/typescript.png" alt="HTML Logo" width={50} height={50}></Image>
                    <h1 className="mt-5">Typescript</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/c.png" alt="HTML Logo" width={50} height={50}></Image>
                    <h1 className="mt-5">C</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/react.png" alt="HTML Logo" width={50} height={50}></Image>
                    <h1 className="mt-5">React</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/tailwind.png" alt="HTML Logo" width={50} height={50}></Image>
                    <h1 className="mt-5">Tailwind CSS</h1>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Experience;