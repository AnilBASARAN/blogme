import React from 'react'

const ProjectList =  async () => {
  const response = await fetch("http://localhost:3003/repos")//{next: {revalidate:3600} });
  const repos = await response.json();
  
  return (
    <ul>
        {repos.map( repo => (
          <li className="mb-4" key={repo.id}>
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