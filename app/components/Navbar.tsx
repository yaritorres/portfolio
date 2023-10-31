import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.nameContainer}>
        <p>yari</p> <p>torres</p> <p>nicola</p>
      </div>
    </div>
  )
}