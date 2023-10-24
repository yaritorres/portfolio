import styles from './styles/page.module.css'
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  )
}
