/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/Tab Body Styles/projects.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function DuguidModal({ duguidShow, setDuguidShow } : { duguidShow:any, setDuguidShow:any }) {
  return (
    <Modal show={duguidShow} onHide={() => { setDuguidShow(false) }} size='lg' centered>
      <Modal.Header>
        <Modal.Title>Duguid Construction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src='../../../duguid.gif'
          alt='gif of one of my projects'
          height={400}
          width={765}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.duguidDescription}>
            This was a project I worked on alongside 5 other incredible software engineers.
          </p>

          <p className={styles.duguidDescription}>
            For this project, were assigned a client and we held meetings with said client about what they wanted for
            their website. Our particular client told us he needed an accessible and user friendly remake of the last
            webpage they had. We were tasked with creating a site that would be easy-to-use for older customers as well
            as visually appealing and performant.
          </p>

          <p className={styles.duguidDescription}>
            We created this website using Next.js and deployed it with AWS. It was styled with Bootstrap, React-Bootstrap, and CSS.
            We also leveraged an authorization platform, Auth0, for a login feature that allowed our website to distinguish between
            employers, employees, and customers.
          </p>

          <p className={styles.duguidDescription}>
            This login feature allowed for different tabs to become available in the navbar where employees could see construction job
            postings, locations, and different information about specific jobs, such as tools needed and a description of the job itself.

            Employers would be able to post jobs and edit them, as well as assign, edit, or remove employees as needed.

            Customers were able to request jobs and had different forms to fill out based on a triage system built into the site.

            We also made general information available, a way to leave reviews, and a contact page.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { setDuguidShow(false) }}>
          Close
        </Button>
      </Modal.Footer>
  </Modal>
  )
}