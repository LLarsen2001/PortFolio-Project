import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TabsDemo from './TabsDemo';

function ModalDemo(props) {

  return (
    <>

      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TabsDemo add={props.add} />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDemo