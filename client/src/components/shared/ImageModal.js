import { useContext } from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../providers/AuthProvider';
import JobForm from '../JobForm';
import CompanyForm from './CompanyForm';

const ImageModal = (props) => {
  const [company, setCompany] = useState(false)
  const { user } = useContext(AuthContext)

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
          <div style={{ height: 'auto', width: 'auto' }}>
            {<img src={user.image} />}
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ImageModal