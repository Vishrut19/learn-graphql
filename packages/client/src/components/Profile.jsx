import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MY_PROFILE } from "../gqloperations/queries.js";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  const { loading, error, data } = useQuery(GET_MY_PROFILE);

  const navigate = useNavigate();

  if (loading) return <h2>Profile is Loading...</h2>;

  // If user is not logged in, navigate to login page.
  if (!localStorage.getItem("token")) {
    navigate("/login");
    return <h1> Unauthorized User</h1>;
  }

  if (error) {
    console.log(error.message);
  }

  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid", marginTop: "10px" }}
          src={`https://robohash.org/set_set2/${data.user.firstName}.png?size=200x200`}
          alt="Profile Pic"
        />
        <h5>
          {data.user.firstName} {data.user.lastName}
        </h5>
        <h6>Email - {data.user.email}</h6>
      </div>
      <h3>Your Quotes</h3>
      {data.user.quotes.map((quote, index) => {
        return (
          <blockquote key={index}>
            <h6>{quote.name}</h6>
          </blockquote>
        );
      })}
    </div>
  );
}

export default Profile;
