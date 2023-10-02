import styles from '@/styles/modules/Home.module.scss';
import Button from "@/components/Button";
import Container from "@/components/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJs, faLinkedin, faPhp, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <main className={styles.welcome}>
      <Container>
        <span>portfolio</span>
        <h1 className="font-bold">Demetrio Montalto</h1>

        <div className={styles.stack}>
          <FontAwesomeIcon icon={faHtml5} style={{color: "#f06529"}} />
          <FontAwesomeIcon icon={faCss3} style={{color: "#2965f1"}} />
          <FontAwesomeIcon icon={faSass} style={{color: "#c69"}} />
          <FontAwesomeIcon icon={faJs} style={{color: "#F0DB4F"}} />
          <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB"}} />
          <FontAwesomeIcon icon={faWordpress} style={{color: "#00749C"}} />
          <FontAwesomeIcon icon={faPhp} style={{color: "#777BB3"}} />
        </div>
        
        <p>& more..</p>

        <Button className={styles.enterButton} path='./portfolio'>sfoglia i miei progetti</Button>

        <p>
          <a href="https://github.com/0xDEMXN/portfolio" target="_blank" rel="noopener noreferrer">codice sorgente</a>
        </p>

        <p>
          puoi trovarmi su:
          <br />
          <a href="https://github.com/0xDEMXN/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> github
          </a> &mdash; <a href="https://linkedin.com/in/demetriomontalto" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> linkedin
          </a>
        </p>
      </Container>

    </main>
  );
}

export default Home