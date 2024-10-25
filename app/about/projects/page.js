//export const dynamic = 'force-dynamic'

export default  async function ProjectsPage() {
  const response = await fetch("http://localhost:3003/repos")//{next: {revalidate:3600} });
  const repos = await response.json();


    return (
    <div className="p-20">
      <h1 className="mb-8">Projects</h1>
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
      </div>
  )
  }