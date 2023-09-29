import { Project } from "@/types/project"
import styles from '@/styles/modules/ExtendedCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { motion } from 'framer-motion'
import Image from "next/image"
import { useEffect } from "react"

const Card = (
  {project, onProjectClose}:
  {project: Project, onProjectClose: () => void}
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onProjectClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  });
  
  return (
    <div className="fixed inset-0 p-6 overflow-y-auto bg-black/50" onClick={onProjectClose}>
      <motion.div
        layoutId={project.slug} 
        className="max-w-4xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.card}>
          <Image src={project.image} alt="" width={1920} height={1080} />
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