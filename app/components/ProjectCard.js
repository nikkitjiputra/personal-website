import React, { useState } from 'react'
import Link from 'next/link'

const ProjectCard = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="z-20 w-60 h-70 bg-amber-900 text-white rounded-3xl m-5 md:m-10 p-5 flex flex-col justify-between">
        <div className="">
            <h1 className="text-2xl font-serif text-center mb-5">{props.name}</h1>
            <h1 className="text-md font-serif mb-10">{props.description}</h1>
        </div>
        
        <Link className="hover:underline text-xl self-end font-serif z-40" onClick={() => setClicked(true)} href={`/projects/${props.slug}`}>{clicked ? "Loading..." : "Read Me"}</Link>
    </div>
  )
}

export default ProjectCard