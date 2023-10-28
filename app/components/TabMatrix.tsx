import styles from '../styles/tabMatrix.module.css';

export default function tabMatrix() {
  return (
    <div className={styles.matrixContainer}>
      <div className={styles.homeTabContainer}>
        <div className={styles.homeHeader}>
          <span>home</span>
        </div>
        <div className={styles.homeBody}></div>
      </div>
    </div>
  )
}