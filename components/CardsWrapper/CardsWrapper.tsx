"use client"

import { Project } from "@/types/project"
import Card from "@/components/Card/Card"

const CardsWrapper = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://picsum.photos/200/300",
      link: "https://www.google.com",
    },
    {
      id: 2,
      title: "project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://picsum.photos/200/300",
      link: "https://www.google.com",
    },
    {
      id: 3,
      title: "project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://picsum.photos/200/300",
      link: "https://www.google.com",
    },
    {
      id: 4,
      title: "project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://picsum.photos/200/300",
      link: "https://www.google.com",
    },
    {
      id: 5,
      title: "project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://picsum.photos/200/300",
      link: "https://www.google.com",
    },
    {
      id: 6,
      title: "project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://picsum.photos/200/300",
      link: "https://www.google.com",
    },
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5'>
      {projects.map(project => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  )
}

export default CardsWrapper