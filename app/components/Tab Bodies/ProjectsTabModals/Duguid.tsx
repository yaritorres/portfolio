/* eslint-disable @next/next/no-img-element */
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function DuguidModal({ duguidShow, setDuguidShow }) {
  return (
    <Modal show={duguidShow} onHide={() => { setDuguidShow(false) }}>
      <Modal.Header closeButton>
        <Modal.Title>This is the Duguid Modal!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src='../../../duguid.gif'
          alt='gif of one of my projects'
          height={200}
          width={250}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { setDuguidShow(false) }}>
          Close
        </Button>
      </Modal.Footer>
  </Modal>
  )
}