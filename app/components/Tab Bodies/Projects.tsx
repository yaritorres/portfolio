import styles from '../../styles/tabMatrix.module.css';
import projectStyles from '../../styles/Tab Body Styles/projects.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import RoyaleModal from './ProjectsTabModals/RoyaleModal';
import DuguidModal from './ProjectsTabModals/DuguidModal';
import AtelierModal from './ProjectsTabModals/AtelierModal';

export default function ProjectsBody({ activeTab, animateBodyText } : { activeTab:string, animateBodyText:any }) {
  const projectsBodyStyles = {
    display: activeTab === 'projects' ? 'flex' : 'none',
  }
  const [royaleShow, setRoyaleShow] = useState(false);
  const [duguidShow, setDuguidShow] = useState(false);
  const [atelierShow, setAtelierShow] = useState(false);

  return (
    <div className={`${styles.projectsBody} ${styles.tabBody}`} style={projectsBodyStyles}>
      <h4 className={styles.projectsHeading}> click the gifs and images below to read more about my projects! </h4>
      <div className={`${styles.bodyText} ${styles.projectsImageContainer}`}>
        <div className={projectStyles.labeledImageContainer} onClick={() => { setRoyaleShow(true) }}>
          <motion.img
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
            className={projectStyles.projectImage}
            src='../../royalepage.gif'
            height={200}
            width={250}
          />
          <motion.label
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
          >
            royale
          </motion.label>
        </div>
        <RoyaleModal royaleShow={royaleShow} setRoyaleShow={setRoyaleShow} />
        <div className={projectStyles.labeledImageContainer} onClick={() => { setDuguidShow(true) }}>
          <motion.img
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
            className={projectStyles.projectImage}
            src='../../duguid.gif'
            height={200}
            width={250}
          />
          <motion.label
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
          >
            duguid construction
          </motion.label>
        </div>
        <DuguidModal duguidShow={duguidShow} setDuguidShow={setDuguidShow} />
        <div className={projectStyles.labeledImageContainer} onClick={() => { setAtelierShow(true) }}>
          <motion.img
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
            className={projectStyles.projectImage}
            src='../../loaderio_testing.png'
            height={200}
            width={250}
          />
          <motion.label
            animate={ activeTab === 'projects' ? 'fadeIn' : 'fadeOut'}
            variants={animateBodyText}
            transition={{ duration: 0.2 }}
          >
            atelier
          </motion.label>
        </div>
        <AtelierModal atelierShow={atelierShow} setAtelierShow={setAtelierShow} />
      </div>
    </div>
  )
}