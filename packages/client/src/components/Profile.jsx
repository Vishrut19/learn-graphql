import React from "react";

function Profile(props) {
  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid", marginTop: "10px" }}
          src="https://robohash.org/set_set2/abc.png?size=200x200"
          alt="Profile Pic"
        />
        <h5>Vishrut Agarwalla</h5>
        <h6>Email - vishrut@gmail.com</h6>
      </div>
      <h3>Your Quotes</h3>
      <blockquote>
        <h6>if it works don't touch it</h6>
      </blockquote>
      <blockquote>
        <h6>if it works don't touch it</h6>
      </blockquote>
    </div>
  );
}

export default Profile;
