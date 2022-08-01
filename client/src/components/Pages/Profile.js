import React, { useContext, useState } from "react";
import Card from 'react-bootstrap/Card'
import { AuthContext } from "../../providers/AuthProvider";
import styled from "styled-components";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button";
import SingleImageUpload from "../shared/SingleImageUpload";
import Job from "./Job";
import { JobsContext } from "../../providers/JobsProvider";

const ImageS = styled.div`
  display: flex;
  max-width: 30%;
  float: right;
`;

const CreatedJobs = styled.div`
display: flex;

align-items: center;

overflow-x: auto;
`;

const Profile = () => {
  // const [noImage] = useState("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F451-4517876_default-profile-hd-png-download.png&imgrefurl=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FhxibTwh_default-profile-hd-png-download%2F&tbnid=4edWzZTKs1yRvM&vet=12ahUKEwiu48-sk5f5AhXmATQIHQ_qBisQMygdegUIARCkAg..i&docid=xwIlDPGqcBhivM&w=860&h=663&q=default%20profile%20picture&ved=2ahUKEwiu48-sk5f5AhXmATQIHQ_qBisQMygdegUIARCkAg")
  const { user, setUser, EditUser } = useContext(AuthContext)
  const { jobs } = useContext(JobsContext)
  const [emailToggle, setEmailToggle] = useState(false)
  const [nameToggle, setNameToggle] = useState(false)
  const [passwordToggle, setPasswordToggle] = useState(true)
  const [email, setEmail] = useState(user.email || '')
  const [name, setName] = useState(user.name || '')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);
  const edit = true;
  const handleShow = () => {
    setShow(true)
  }
  const handleClose = () => setShow(false);

  const handleEmailToggle = () => {
    setEmailToggle(!emailToggle)
  }
  const handleNameToggle = () => {
    setNameToggle(!nameToggle)
  }
  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle)
  }
  const handleEmailSubmit = (e) => {
    e.preventDefault()
    EditUser({ email, name })
    setEmailToggle(false)
    setNameToggle(false)
  }

  const handlePasswordSubmit = (p) => {
    p.preventDefault()
    if (password.length < 6) {
      alert('Password not long enough')
    }
    if (password !== passwordConfirm) {
      alert('passwords do not match')
    }
    console.log(password)
    EditUser({ password })
    setPasswordToggle(false)
  }

  const renderPostedJobs = () => {
    console.log('renderPostedJobs called')
    // if (loading) {
    //   return <p>Loading</p>
    // }
    console.log(jobs)
    let postedJobs = jobs.filter((j)=> j.created_by === user.id)
    console.log(postedJobs)
    return postedJobs.map(j => {
      return (<div className='jobpage'>
        <Job key={j.id} edit={edit} {...j} />
      </div>
      )
    })
  }

  return (
    <Card style={{
      width: "auto",
      height: "auto",
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      justifyContent: "center",
      alignItems: "",
      margin: "0 auto",
      float: "none",
      marginTop: "1rem",
    }}>

      <Card.Body>
        <ImageS><Card.Img variant="top" src={user.image ? user.image : "noImage"} onClick={handleShow} /></ImageS >
        {/* <ImageModal show={show} handleClose={handleClose}/> */}
        <Card.Title style={{fontFamily: "Poppins", fontSize: "50px"}}>Profile</Card.Title>
        <Card.Text>Hello {user.name}</Card.Text>
        <Card.Text>{user.email}</Card.Text>
        {/* <Button size="sm" onClick={handlePasswordToggle} style={{float: "right"}}>Change Profile Picture</Button> */}
      </Card.Body>
      <div style={{ border: ".5px solid grey " }}></div>

      <Card.Body>
        <Card.Text>You can change your Profile image by dragging desired image file into the dropbox below.</Card.Text>
        <SingleImageUpload style={{}} id={user.id} setUser={setUser} />
      </Card.Body>
      <div style={{ border: ".5px solid grey " }}></div>
      <Card.Body>
        <>
        <Card.Text style={{fontFamily: "Poppins", fontSize: "20px"}}>Account Information</Card.Text>
          <Form onSubmit={handleEmailSubmit} style={{width: "30%"}}>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="FormLabel">Name: </Form.Label>
              <Form.Control
                value={name}
                onChange={(n) => {
                  setName(n.target.value)
                }}
                type="name" placeholder="Change Username?"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="FormLabel">Email: </Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="email" placeholder="Change Email?"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>


        </>
</Card.Body>
<div style={{ border: ".5px solid grey " }}></div>
<Card.Body>
        <>
          <Card.Text style={{fontFamily: "Poppins", fontSize: "20px"}}>Change your Password:</Card.Text>
          {/* <Button size="sm" onClick={handlePasswordToggle}>Edit</Button> */}
          {passwordToggle &&
            <Form onSubmit={handlePasswordSubmit} style={{width: "30%"}}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="FormLabel"> Enter new password:</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(p) => {
                    setPassword(p.target.value)
                  }}
                  type="name" placeholder="Change Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="FormLabel">Confirm New Password: </Form.Label>
                <Form.Control
                  value={passwordConfirm}
                  onChange={(p) => {
                    setPasswordConfirm(p.target.value)
                  }}
                  type="name" placeholder="Confirm New Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          }

        </>

      </Card.Body>
      <div style={{ border: ".5px solid grey " }}></div>

      <Card.Body>
        <Card.Text style={{fontFamily: "Poppins", fontSize: "20px"}}>My Posted Jobs</Card.Text>
        <CreatedJobs>
          {renderPostedJobs()}
        </CreatedJobs>
      </Card.Body>
    </Card>
  );
}
export default Profile;