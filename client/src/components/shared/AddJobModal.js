import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import JobForm from '../JobForm';
import CompanyForm from './CompanyForm';

const AddJobModal = (props) => {
  const [company, setCompany] = useState(false)

  const toggleForms = () => {
    setCompany(!company)
  }
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
          {company ? <CompanyForm toggleForms={toggleForms}/> : <JobForm handleClose={props.handleClose} toggleForms={toggleForms}/>}
          </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddJobModal