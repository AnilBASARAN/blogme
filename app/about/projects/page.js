//export const dynamic = 'force-dynamic'

import ProjectList from "./components/ProjectList";
import { Suspense } from "react";
import ProjectListLoading from "./components/ProjectListLoading";

export default  async function ProjectsPage() {
 


    return (
    <div className="p-20">
   
      <div className="mb-8" >Hello this is list of my repos </div>
      <Suspense fallback={<ProjectListLoading />} >
        <ProjectList />
      </Suspense>
      </div>
  )
  }