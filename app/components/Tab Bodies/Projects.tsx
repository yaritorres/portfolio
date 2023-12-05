import styles from '../../styles/tabMatrix.module.css'
import { motion } from 'framer-motion';

export default function ProjectsBody({ activeTab, animateBodyText }) {
  const projectsBodyStyles = {
    display: activeTab === 'projects' ? 'flex' : 'none',
  }
  return (
    <div className={`${styles.projectsBody} ${styles.tabBody}`} style={projectsBodyStyles}>
      <div className={styles.bodyText}>

      </div>
    </div>
  )
}