import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditJobForm from '../components/shared/EditJobForm';
import UserJobTabs from '../components/shared/UserJobTabs';
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
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.userJob ? (<UserJobTabs />) : <EditJobForm handleClose={props.handleClose} />}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDemo