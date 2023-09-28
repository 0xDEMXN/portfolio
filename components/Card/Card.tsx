import { Project } from "@/types/project"
import styles from './card.module.css'
import { motion } from 'framer-motion'
import Image from "next/image"

const Cards = (
  {project, onSelectedProject}:
  {project: Project, onSelectedProject: (project: Project) => void}
) => {
  return (
      <motion.div layoutId={project.slug} className={styles.card} onClick={() => onSelectedProject(project)}>
        <Image src={project.image} alt="" width={500} height={200} />
        <div className={styles.cardDetails}>
          <h2 className="mb-3">{ project.title }</h2>
          <p>{ project.excerpt }</p>
        </div>
      </motion.div>
  )
}

export default Cards