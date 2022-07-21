import React, { Component } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

import UserProfile from "react-user-profile";

class Profile extends Component {
  render() {
    const photo =
      "https://image.tmdb.org/t/p/w185/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg";
    const userName = "Harvey Specter";
    const location = "New York, USA";


    const comments = [
      {
        id: "1",
        photo:
          "https://image.tmdb.org/t/p/w185/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        userName: "Mike Ross",
        content:
          "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ",
        createdAt: 1543858000000
      }
    ];

    return (
      <div style={{ margin: "0 auto", width: "100%" }}>
        <UserProfile
          photo={photo}
          userName={userName}
          location={location}
          
          initialComments={comments}
        /> 
        <Button as={Link} to="/update" variant="info">Update</Button>
      </div>
    );
  }
}


           

export default Profile;