import React from 'react'
import Link from 'next/link'

const ProjectCard = (props) => {
  return (
    <div className="w-60 h-70 bg-orange-300 m-10 p-5 flex flex-col justify-between">
        <div className="">
            <h1 className="text-2xl text-center mb-5">{props.name}</h1>
            <h1 className="text-md mb-10">{props.description}</h1>
        </div>
        
        <Link className="self-end" href={`/projects/${props.slug}`}>Read More</Link>
    </div>
  )
}

export default ProjectCard