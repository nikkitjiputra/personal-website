import React from 'react'
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';

const getProjects = async () => {
    const res = await fetch("http://localhost:3000/api/projects");
    
    return res.json();
}
const Projects = async () => {
    const { collections } = await getProjects();
    //console.log(collections, "a collection");
  return (
    
    <div>
        <NavBar />
        <div className="mt-10 mx-20">
            <h1 className="text-5xl mb-10">Projects</h1>
            <div className="flex justify-start">
                {collections.map(collection => (
                    <ProjectCard description={collection.description} key={collection._id} name={collection.name} slug={collection.slug} />
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Projects;