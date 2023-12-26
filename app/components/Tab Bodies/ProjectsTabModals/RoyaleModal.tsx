/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/Tab Body Styles/projects.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function RoyaleModal({ royaleShow, setRoyaleShow } : { royaleShow:any, setRoyaleShow:any }) {
  return (
    <Modal show={royaleShow} onHide={() => { setRoyaleShow(false) }} size='lg' centered>
      <Modal.Header>
        <Modal.Title>Royale Clothing</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src='../../../royalepage.gif'
          alt='gif of one of my projects'
          height={400}
          width={765}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.duguidDescription}>
            For this project me and 2 other amazing engineers were tasked with designing a front-end for an online clothing company.
            We had a list of basic requirements to fulfill in terms of functionality but had ultimate creative freedom relative to
            the visual aspect of the platform.
          </p>

          <p className={styles.duguidDescription}>
            We created this website using React and deployed it with AWS. It was styled entirely using CSS as we had all decided not to use any libraries and wanted to challenge ourselves from a design standpoint.
          </p>

          <p className={styles.duguidDescription}>
            In terms of the actual functionality, I was responsible for the image carousel. I imported images and descriptions of products from a database using an Express server and loaded them into the carousel I created by hand. It featured a way to switch between different images of a chosen style or, if needed, changing to a different style of the same product using the array of bubbles provided. You were also able to click images to expand them, allowing the use of a hovering magnifying glass. In this expanded format, you could still switch between different images of the selected style.
          </p>

          <p className={styles.duguidDescription}>
            Finally, you could also select different sizes and quantities of products and add them to your &quot;cart&quot;. This information, too, was available in the database our team had established a connection to. This server allowed us to import images of products, data pertaining to how much stock there was of each item and the differing sizes, and how the products were desrcibed. My team tested the different routes and requests for this data using Postman.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { setRoyaleShow(false) }}>
          Close
        </Button>
      </Modal.Footer>
  </Modal>
  )
}