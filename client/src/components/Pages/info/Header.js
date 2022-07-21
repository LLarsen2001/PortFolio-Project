import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const Header = props => {
  return (
    <Jumbotron fluid>
      <h1>Profile Image Here</h1>
      <h3>{props.username}</h3>
    </Jumbotron>
  );
};

export default Header;
