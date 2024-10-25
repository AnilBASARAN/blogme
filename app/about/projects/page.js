//export const dynamic = 'force-dynamic'

import ProjectList from "./components/ProjectList";
import { Suspense } from "react";
import ProjectListLoading from "./components/ProjectListLoading";

export default  async function ProjectsPage() {
 


    return (
    <div className="p-20">
      <h1 className="mb-8">Projects</h1>
      <Suspense fallback={<ProjectListLoading />} >
        <ProjectList />
      </Suspense>
      </div>
  )
  }