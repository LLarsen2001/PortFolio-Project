import Card from 'react-bootstrap/Card'
import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/Container'
import { UserJobsContext } from '../../providers/UserJobsProvider';
import ModalDemo from '../../demos/ModalDemo'
import Badge from 'react-bootstrap/Badge'
import { FormDataContext } from '../../providers/FormDataProvider';
// const Cardstyle = styled.div`
// max-width: 19vw;
// display: flex;
// border-radius: 45px;
// padding: .4vw .4vw;
// `;

const Cardlocationtext = styled.div`
font-size: 12px;
`;
const Titletext = styled.div`
font-size: 15px;
`;
const Job = (props) => {
  const { setJobData } = useContext(FormDataContext)
  const { addUserJob } = useContext(UserJobsContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setJobData(id)
    setShow(true)
  }
  const formatSalary = () => {
    return "$" + props.salary + "/yr"

  }
  const CheckRemote = () => {
    if (props.remote === true) {
      return ('Remote')
    } else {
      return
    }
  }

  const handleSubmit = () => {
    addUserJob({ job_id: props.id, status: 'wishlist' })
  }
  return (
    <div style={{ margin: ".5rem" }}>

      <Card
        text='white'
        style={{
          width: '18.5vw', height: '21vh', background: "#4640DE", borderRadius: "24px", justifyContent: "space-between", overflow: "hidden",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {props.edit &&
            <Button variant="primary" onClick={() => {
              handleShow(props.id)
            }}>
              Edit
            </Button>
          }

          <ModalDemo show={show} handleClose={handleClose} edit={props.edit} />
          <Card.Text style={{ marginLeft: '.75rem' }}><Cardlocationtext>Created by {props.name} </Cardlocationtext></Card.Text>
          <button
            style={{ marginLeft: 'auto', marginRight: '.4vw', width: '3rem', height: '1.5rem' }}
            onClick={handleSubmit}>add</button>
        </div>
        <Card.Body>
          <Card.Text>
            <p><b><Titletext>{props.jobname}</Titletext></b>
              <Cardlocationtext>{props.companyname}</Cardlocationtext>
            </p>

            <div>
              <h6>
                <Badge style={{ marginLeft: 'auto', marginRight: '.75rem' }}>{props.description}</Badge>
                <Badge style={{ marginRight: 'auto', marginLeft: '.75rem' }}>{CheckRemote()}</Badge>

              </h6>
            </div>

          </Card.Text>
        </Card.Body>


        <div style={{
          display: 'flex', flexDirection: 'row', fontWeight: 'bold', justifyContent: 'spaceBetween'

        }}>
          <div style={{ marginRight: 'auto', marginLeft: '1.3rem' }}>
            <Cardlocationtext>
              <p>  {formatSalary()}</p>
            </Cardlocationtext>
          </div>


          <div style={{ marginLeft: 'auto', marginRight: '1.3rem' }}>


            <Cardlocationtext>
              <p>{props.location}</p>
            </Cardlocationtext>
          </div>
        </div>

      </Card >
    </div>

  )
}
export default Job
