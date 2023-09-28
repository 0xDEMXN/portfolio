import { Project } from "@/types/project"
import styles from './extendedcard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { motion } from 'framer-motion'
import Image from "next/image"

const Card = (
  {project, onProjectClose}:
  {project: Project, onProjectClose: () => void}
) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center" onClick={onProjectClose}>
      <motion.div
        layoutId={project.slug} 
        className="max-w-4xl w-11/12 py-12 overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.card}>
          <Image src={project.image} alt="" width={800} height={500} />
          <div className={styles.cardDetails}>
            <button className={`${styles.close} text-3xl`} onClick={onProjectClose}><FontAwesomeIcon icon={faTimesCircle} /></button>
            <h2 className="mb-3">{ project.title }</h2>
            <p>{ project.content }</p>
            
            <a href={project.link} target="_blank" rel="noopener noreferrer">visita il sito web <FontAwesomeIcon icon={faExternalLink} /> </a>  
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card