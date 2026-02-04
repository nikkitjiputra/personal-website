
import React from 'react'
import NavBar from '@/app/components/NavBar';
import clientPromise from '@/lib/mongodb';
import Link from 'next/link';
import Image from 'next/image';


// const getProject = async (slug) => {
//     const res = await fetch(`http://localhost:3000/api/projects/${slug}`);
//     return res.json();
// }

const ProjectPage = async ({params}) => {
    const { slug } =  await params;
    //const { project } = await getProject(slug);
    console.log("here");
    // useEffect(() => {
    //     console.log("here");
    //     fetch(`/api/projects/${slug}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log("data", data);
    //             setProject(data.collections);})
    //     }, []);

    const client = await clientPromise;
    const db = client.db("personalSiteDB");
    //console.log(slug);
    const project = await db.collection("projects").findOne({ slug: slug });

    //console.log(project, "a collection");
  return (
    <div>
        <NavBar />
        <div className="mx-5 mt-30 z-20 relative font-serif p-5 md:mt-20 md:mx-20">
            <h1 className="mb-5 text-amber-900 text-5xl">Projects</h1>

            <Link className="hover:text-shadow-lg flex items-center mb-10" href="/projects">
                <Image src="/back.png" width="30" height="30" alt="Back"></Image>
                <h1 className="text-lg">Back to Projects</h1>
            </Link>

            {!project.link && <h1 className="mb-5 md:mb-10 text-3xl">{project.name}</h1>}
            
            {project.link && 
            <div className="mb-5 md:mb-10">
                <Link className="hover:text-shadow-lg hover:text-gray-700 text-3xl" href={project.link}>{project.name}</Link>
            </div>}

            <div className="mx-5 md:mx-10">
                
                <h1 className="mb-10 text-lg">{project.summary}</h1>

                <h1 className="mb-5 text-2xl">Tech Stack:</h1>
                <ul className="text-lg mb-5 list-disc list-inside">
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