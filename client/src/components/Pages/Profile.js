import React, { useContext, useState } from "react";
import Card from 'react-bootstrap/Card'
import { AuthContext } from "../../providers/AuthProvider";
import styled from "styled-components";
import Form from "react-bootstrap/Form"

import Button from "react-bootstrap/esm/Button";
import SingleImageUpload from "../shared/SingleImageUpload";

const ImageS = styled.div`
  display: flex;
`;
const Profile = () => {
  const [noImage] = useState("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F451-4517876_default-profile-hd-png-download.png&imgrefurl=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FhxibTwh_default-profile-hd-png-download%2F&tbnid=4edWzZTKs1yRvM&vet=12ahUKEwiu48-sk5f5AhXmATQIHQ_qBisQMygdegUIARCkAg..i&docid=xwIlDPGqcBhivM&w=860&h=663&q=default%20profile%20picture&ved=2ahUKEwiu48-sk5f5AhXmATQIHQ_qBisQMygdegUIARCkAg")
  const { user, setUser, EditUser } = useContext(AuthContext)
  const [emailToggle, setEmailToggle] = useState(false)
  const [nameToggle, setNameToggle] = useState(false)
  const [passwordToggle, setPasswordToggle] = useState(false)
  const [email, setEmail] = useState(user.email || '')
  const [name, setName] = useState(user.name || '')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

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
    EditUser({ email })
    setEmailToggle(false)
  }
  const handleUsernameSubmit = (n) => {
    n.preventDefault()
    EditUser({ name })
    setNameToggle(false)
  }
  const handlePasswordSubmit = (p) => {
    p.preventDefault()
    if (password.length < 6) {
      alert('Passwaor not long enough')
    }
    if (password !== passwordConfirm) {
      alert('passwords do not match')
    }
    console.log(password)
    EditUser({ password })
    setPasswordToggle(false)
  }
  return (
    <Card style={{
      width: "40vw",
      height: "40vw",
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      justifyContent: "center",
      alignItems: "",
      margin: "0 auto",
      float: "none",
      marginTop: "1rem",
    }}>

      <Card.Body>
        <ImageS><Card.Img variant="top" src={noImage} /></ImageS >
        <Card.Title>Profile Page</Card.Title>
        <Card.Text>Username {user.name}</Card.Text>


        <Card.Text>Email {user.email}</Card.Text>
        <>
          <Button size="sm" onClick={handleEmailToggle}>Edit</Button>
          {emailToggle &&
            <Form onSubmit={handleEmailSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
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
          }

        </>
        <>
          <Card.Text>Username {user.name}</Card.Text>
          <Button size="sm" onClick={handleNameToggle}>Edit</Button>
          {nameToggle &&
            <Form onSubmit={handleUsernameSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(n) => {
                    setName(n.target.value)
                  }}
                  type="name" placeholder="Change Username?"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          }

        </>
        <>
          <Card.Text>Password {user.password}</Card.Text>
          <Button size="sm" onClick={handlePasswordToggle}>Edit</Button>
          {passwordToggle &&
            <Form onSubmit={handlePasswordSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(p) => {
                    setPassword(p.target.value)
                  }}
                  type="name" placeholder="Change Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Confirm Password </Form.Label>
                <Form.Control
                  value={passwordConfirm}
                  onChange={(p) => {
                    setPasswordConfirm(p.target.value)
                  }}
                  type="name" placeholder="Confirm changed Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          }

        </>
      </Card.Body>

      <Card.Body>
        <Card.Text>You can change your Profile image by dragging desired image file into the dropbox below.</Card.Text>
        <SingleImageUpload style={{}} id={user.id} setUser={setUser} />
      </Card.Body>
    </Card>
  );
}
export default Profile;