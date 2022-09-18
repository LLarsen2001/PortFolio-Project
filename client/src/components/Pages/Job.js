import Card from 'react-bootstrap/Card'
import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import "../../App.css"
import Button from 'react-bootstrap/esm/Button';
import Vector from "../../Imgstyle/Vector.png"
import Edit from "../../Imgstyle/EditButton.png"
import Delete from "../../Imgstyle/Delete.png"
import Container from 'react-bootstrap/Container'
import { UserJobsContext } from '../../providers/UserJobsProvider';
import ModalDemo from '../../demos/ModalDemo'
import Badge from 'react-bootstrap/Badge'
import { AuthContext } from '../../providers/AuthProvider';
import { JobsContext } from '../../providers/JobsProvider';

const Cardlocationtext = styled.div`
font-size: 12px;
`;

const Titletext = styled.div`
font-size: 15px;
`;

const Job = (props) => {
  const { setJobData, deleteJob } = useContext(JobsContext)
  const { addUserJob } = useContext(UserJobsContext)
  const { user } = useContext(AuthContext)
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

  const click = () => {
    console.log('hello')
    addUserJob({ job_id: props.id, status: 'wishlist' })
  }

  return (
    <div style={{ margin: ".5rem" }}>
      <Card
        className='cardBackGround'
        text='white'
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ModalDemo show={show} handleClose={handleClose} edit={props.edit} />
          <Card.Text style={{ marginLeft: '.75rem' }}><Cardlocationtext>Created by {props.name} </Cardlocationtext></Card.Text>
          <div style={{ marginLeft: 'auto', zIndex: '10' }}>
            {props.edit &&
              <>
                <img src={Edit}
                  className='EditJobButton'
                  onClick={() => handleShow(props.id)}
                />
                <img src={Delete}
                  onClick={() => deleteJob(props.id)}
                  className="DeleteJobButton"
                />
              </>}
            {user ? <><img src={Vector}
              className='SaveJobButton'
              onClick={() => { click() }}
            />
            </> : null}
          </div>
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
    </div >

  )
}
export default Job
