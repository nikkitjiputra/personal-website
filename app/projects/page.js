"use client";
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';



// const getProjects = async () => {
//     const res = await fetch("http://localhost:3000/api/projects");
    
//     return res.json();
// }
const Projects = () => {
    //const { collections } = await getProjects();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/api/projects")
            .then(res => res.json())
            .then(data => setProjects(data.collections));
        }, []);
    //console.log(projects, "a collection");
  return (
    
    <div className="">
        <NavBar className="self-start" />
        <div className="z-20 relative mt-30 p-5 mx-5 md:mt-20 md:mx-20">
            <h1 className="text-5xl text-amber-900 font-serif mb-10">Projects</h1>
            {projects && <h1 className="text-3xl text-amber-900 font-serif text-center">Loading...</h1>}
            <div className="flex flex-col md:flex-row md:flex-wrap justify-start">
                {projects.map(project => (
                    <ProjectCard description={project.description} key={project._id} name={project.name} slug={project.slug} />
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Projects;