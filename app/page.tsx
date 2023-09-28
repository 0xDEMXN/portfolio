import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Container from "@/components/Layout/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <main className={styles.welcome}>
      <Container>
        <span>portfolio</span>
        <h1 className="font-bold">Demetrio Montalto</h1>

        <Button className={styles.enterButton} path='./portfolio'>sfoglia i miei progetti</Button>
        
        <p>
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