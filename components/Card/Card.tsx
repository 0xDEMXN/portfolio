import { Project } from "@/types/project"
import styles from './card.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"

const Cards = (
  {project}:
  {project: Project}
) => {
  return (
      <div className={styles.card}>
        <img src={project.image} alt="" />
        <div className={styles.cardDetails}>
          <h2>{project.title}</h2>
          <p>{ project.description }</p>
          
          <a href={project.link} target="_blank" rel="noopener noreferrer">visita il sito web <FontAwesomeIcon icon={faExternalLink} /> </a>  
        </div>
      </div>
  )
}

export default Cards