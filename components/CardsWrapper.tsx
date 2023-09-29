"use client"

import { Project } from "@/types/project"
import Card from "@/components/Card"
import { useState } from "react"
import ExtendedCard from "@/components/ExtendedCard"
import useSWR from "swr"

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json())

const CardsWrapper = () => {
  const [ selectedProject, setSelectedProject ] = useState<Project | null>(null)
  const { data, error, isLoading } = useSWR('/api/projects', fetcher)

  if(error) return <div>failed to load</div>
  if(isLoading) return <div>loading...</div>

  return (
    <>
      {selectedProject && (
        <ExtendedCard project={selectedProject} onProjectClose={() => setSelectedProject(null)} />
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5'>
        {data.projects.map((project: Project) => (
            <Card key={project.id} project={project} onSelectedProject={(project: Project) => setSelectedProject(project)} />
        ))}
      </div>
    </>
  )
}

export default CardsWrapper