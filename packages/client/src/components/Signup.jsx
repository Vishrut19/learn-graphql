import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGNUP_USERS } from "../gqloperations/mutations.js";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [signUser, { loading, error, data }] = useMutation(SIGNUP_USERS);

  if (loading) return <h1>Loading...</h1>;
  const handleChange = (e) => {
    //   Here we will update the event i.e. email and password
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /**
     * This is the syntax of writing a mutation i.e.
     * a function and inside the function we are passing a variable having userNew as variable
     * with formData as input parameter.
     **/
    signUser({ variables: { userNew: formData } });
  };
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && data.user && (
        <div className="green card-panel">
          {data.user.firstName} is Signed Up. You can login now!
        </div>
      )}
      <h5>Signup!!</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          required
          name="firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          name="lastName"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          onChange={handleChange}
        />
        <Link to={"/login"}>
          <p>Already have an account ?</p>
        </Link>
        <button className="btn #673ab7 deep-purple" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
