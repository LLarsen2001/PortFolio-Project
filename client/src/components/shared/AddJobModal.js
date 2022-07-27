import Modal from 'react-bootstrap/Modal';
import JobForm from '../JobForm';

const AddJobModal = (props) => {
  return (
    <>

      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JobForm />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddJobModal