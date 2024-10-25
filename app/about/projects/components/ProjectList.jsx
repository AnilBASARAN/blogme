import React from 'react'
import { roboto_mono } from 'app/fonts/myFonts';

const ProjectList =  async () => {
  const response = await fetch("http://localhost:3003/repos")//{next: {revalidate:3600} });
  const repos = await response.json();

  return (
    <ul>
        {repos.map( repo => (
          <li className="mb-4" key={repo.id}>
            <h1 className={roboto_mono.className}>My page</h1>
            <div>{repo.title}</div>
            <div>{repo.description}</div>
            <div>{repo.stargazers_count}</div>
            <div></div>
          </li>
        ))}
      </ul>
  )
}

export default ProjectList