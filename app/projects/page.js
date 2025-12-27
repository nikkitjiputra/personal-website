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
    console.log(projects, "a collection");
  return (
    
    <div>
        <NavBar />
        <div className="mt-10 mx-20">
            <h1 className="text-5xl mb-10">Projects</h1>
            <div className="flex justify-start">
                {projects.map(project => (
                    <ProjectCard description={project.description} key={project._id} name={project.name} slug={project.slug} />
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Projects;