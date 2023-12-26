/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/Tab Body Styles/projects.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function AtelierModal({ atelierShow, setAtelierShow } : { atelierShow:any, setAtelierShow:any }) {
  return (
    <Modal show={atelierShow} onHide={() => { setAtelierShow(false) }} size='lg' centered>
      <Modal.Header>
        <Modal.Title>Project Atelier</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src='../../../loaderio_testing.png'
          alt='png of one of my projects'
          height={400}
          width={765}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.duguidDescription}>
            The final larger-scale project is one I completed on my own within a team of other engineers doing their own separate versions indvidually.
          </p>

          <p className={styles.duguidDescription}>
            For this project, I was tasked with upgrading the database used in the Royale project. The research and execution of the project was up to me as direction was purposefully limited to give us a chance to practice researching and experimenting, as well as challenging our back-end knowledge.
          </p>

          <p className={styles.duguidDescription}>
            The brunt of the project was in writing the SQL queries because I&apos;d already decided on using PostgreSQL as my database. Then, I learned about a way to make managing my data easier by leveraging a program called pgAdmin, a GUI that allowed me to better visualize my data and practice writing the appropriate queries. It also allowed me to see the time necessary to fulfill the requests, which led to me being able to research optimization, such as indexing and pool connections.
          </p>

          <p className={styles.duguidDescription}>
            The last step was testing the new server with Loader.io. Easier queries were quicker, but further testing under a higher load proved too much for more complicated requests, even with minor optimization. After some research and dicsussion with my teammates, I learned about load balancing and ended up using NGINX to tie together 3 separate AWS-deployed servers. After everything, I was able to fulfill 1000 requests per second of the most complicated queries, all while using randomized customer IDs in Loader.io with an average response time of under 80ms.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { setAtelierShow(false) }}>
          Close
        </Button>
      </Modal.Footer>
  </Modal>
  )
}