import React from 'react'
import Link from 'next/link'

const ProjectCard = (props) => {
  return (
    <div className="w-60 h-70 bg-amber-900 text-white rounded-3xl m-10 p-5 flex flex-col justify-between">
        <div className="">
            <h1 className="text-2xl font-serif text-center mb-5">{props.name}</h1>
            <h1 className="text-md font-serif mb-10">{props.description}</h1>
        </div>
        
        <Link className="self-end font-serif z-20" href={`/projects/${props.slug}`}>Read Me</Link>
    </div>
  )
}

export default ProjectCard