import React from 'react'

const ProjectListLoading = () => {
  return (
    <div className="p-20">
    <h1 className="mb-8">Projects</h1>
    <ul className="space-y-12">
      {Array(5).fill(0).map( (_el,index) => (
        <li className="mb-4" key={index}>
         <div className="w-full h-24 animate-pulse bg-neutral-100 dark:bg-neutral-700" ></div>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default ProjectListLoading