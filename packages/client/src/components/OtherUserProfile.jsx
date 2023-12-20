import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../gqloperations/queries.js";
import { useParams } from "react-router-dom";

const OtherUserProfile = () => {
  // Here we are passing userid as parameter to the route.
  const { userid } = useParams();
  console.log(userid);

  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      userid: userid, //First one is graphql variable, second one is the value of the variable i.e. same userid.
    },
  });

  if (loading) return <h2>Profile is Loading...</h2>;

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
};

export default OtherUserProfile;
