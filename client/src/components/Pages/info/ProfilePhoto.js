import React from "react";
import Image from "react-bootstrap/Image";
const profilePhoto = props => {
  return <Image src={props.photo} fluid />;
};

export default profilePhoto;
