import styles from 'app/styles/about.module.css';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className={styles.aboutMain}>
      <Navbar />
      Hi, I&apos;m Yari.
    </div>
  )
}