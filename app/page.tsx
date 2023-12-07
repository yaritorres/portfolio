import styles from './styles/page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TabMatrix from './components/TabMatrix';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <TabMatrix />
    </main>
  )
}
