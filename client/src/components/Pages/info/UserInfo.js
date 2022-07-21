import React from "react";
import { Tabs, Tab, ListGroup } from "react-bootstrap";

const profileInfo = props => {
  let hobbies = props.hobbies.map(hobby => {
    return <ListGroup.Item>{hobby}</ListGroup.Item>;
  });
  let friends = props.friends.map(friend => {
    return <ListGroup.Item>{friend}</ListGroup.Item>;
  });

  return (
    <Tabs>
      <Tab eventKey="hobbies" title="Hobbies">
        <ListGroup>{hobbies}</ListGroup>
      </Tab>
      <Tab eventKey="friends" title="Friends">
        <ListGroup>{friends}</ListGroup>
      </Tab>
    </Tabs>
  );
};

export default profileInfo;
