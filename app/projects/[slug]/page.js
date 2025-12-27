import React from 'react'
import NavBar from '@/app/components/NavBar';

const getProject = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/projects/${slug}`);
    return res.json();
}
const ProjectPage = async ({params}) => {
    const { slug } = await params;
    const { project } = await getProject(slug);
    console.log(project, "a collection");
  return (
    <div>
        <NavBar />
        <div className="mt-10 mx-20">
            <h1 className="mb-10 text-5xl">Projects</h1>
            <h1 className="mb-10 text-3xl">{project.name}</h1>
            <div className="mx-10">
                
                <h1 className="mb-10 text-lg">{project.summary}</h1>
                <h1 className="mb-5 text-2xl">Tech Stack:</h1>
                <ul className="text-lg list-disc list-inside">
                    {project.tech.map(tool => (
                        <li key={tool}>{tool}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    </div>
   
  )
}

export default ProjectPage