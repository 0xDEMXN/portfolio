"use client"

import { Project } from "@/types/project"
import { AnimatePresence } from "framer-motion"
import Card from "@/components/Card/Card"
import { useState } from "react"
import ExtendedCard from "@/components/ExtendedCard/ExtendedCard"

const CardsWrapper = () => {
  const projects: Project[] = [
    {
      id: 2,
      slug: "wasan",
      title: "Wasan Project",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget feugiat lorem. Donec mattis, est at porttitor finibus, tellus turpis interdum leo, non sagittis quam arcu nec dolor. Pellentesque sodales felis quis ante viverra sodales. Sed elementum, ante id congue placerat, enim lorem gravida odio, a tristique magna augue ut elit. In tincidunt velit ac odio auctor, sit amet lacinia diam porta. Integer in nisl augue. Proin suscipit, sapien sed dapibus ullamcorper, ante lectus malesuada lectus, et gravida nisl neque vitae odio. Donec pharetra, elit ut interdum ultricies, diam sapien facilisis leo, eu condimentum dolor ipsum sit amet turpis.",
      image: "/Wasan.jpeg",
      link: "https://wasan.sayitsimple.it/",
    },
    {
      id: 3,
      slug: "google",
      title: "Google",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget feugiat lorem. Donec mattis, est at porttitor finibus, tellus turpis interdum leo, non sagittis quam arcu nec dolor. Pellentesque sodales felis quis ante viverra sodales. Sed elementum, ante id congue placerat, enim lorem gravida odio, a tristique magna augue ut elit. In tincidunt velit ac odio auctor, sit amet lacinia diam porta. Integer in nisl augue. Proin suscipit, sapien sed dapibus ullamcorper, ante lectus malesuada lectus, et gravida nisl neque vitae odio. Donec pharetra, elit ut interdum ultricies, diam sapien facilisis leo, eu condimentum dolor ipsum sit amet turpis.",
      image: "/Google.jpeg",
      link: "https://www.google.com",
    },
  ]

  const [ selectedProject, setSelectedProject ] = useState<Project | null>(null)

  return (
    <>
      {selectedProject && (
        <ExtendedCard project={selectedProject} onProjectClose={() => setSelectedProject(null)} />
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5'>
        {projects.map(project => (
          <Card key={project.id} project={project} onSelectedProject={(project: Project) => setSelectedProject(project)} />
        ))}
      </div>
    </>
  )
}

export default CardsWrapper