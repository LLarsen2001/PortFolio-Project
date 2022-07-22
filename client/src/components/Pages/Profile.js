import React, { useContext } from "react";
import Card from 'react-bootstrap/Card'
import { AuthContext } from "../../providers/AuthProvider";
import styled from "styled-components";
const ImageS = styled.div`
  display: flex
`;
const Profile = () => {
  const { user } = useContext(AuthContext)
  return (
    <Card style={{
      width: "40vw",
      height: "40vw",
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
      float: "none",
      marginTop: "1rem",
    }}>
      <Card.Body>
        {/* <ImageS><Card.image>{user.image}</Card.image></ImageS> */}
        <Card.Title>Profile Page</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Email {user.email}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default Profile;