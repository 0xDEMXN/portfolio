"use client"

import { Project } from "@/types/project"
import Card from "@/components/Card"
import { useState } from "react"
import ExtendedCard from "@/components/ExtendedCard"

const CardsWrapper = ({projects}: {projects: Project[]}) => {
  const [ selectedProject, setSelectedProject ] = useState<Project | null>(null)

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5'>
        {projects?.map((project: Project) => (
          <Card key={project.id} project={project} onSelectedProject={(project: Project) => setSelectedProject(project)} />
          ))}
      </div>

      {selectedProject && (
        <ExtendedCard project={selectedProject} onProjectClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}

export default CardsWrapper