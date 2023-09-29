"use client"

import { Project } from "@/types/project"
import Card from "@/components/Card"
import { useEffect, useState } from "react"
import ExtendedCard from "@/components/ExtendedCard"

const CardsWrapper = () => {
  const [ selectedProject, setSelectedProject ] = useState<Project | null>(null)
  const [ projects, setProjects ] = useState<Project[] | null>(null)

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(projects => setProjects(projects.data.reverse()))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      {selectedProject && (
        <ExtendedCard project={selectedProject} onProjectClose={() => setSelectedProject(null)} />
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5'>
        {projects ? projects.map(project => (
          <Card key={project.id} project={project} onSelectedProject={(project: Project) => setSelectedProject(project)} />
        )) : (
          <div>loading...</div>
        )}
      </div>
    </>
  )
}

export default CardsWrapper