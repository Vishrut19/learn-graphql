import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container my-container">
      <h5>Login!!</h5>
      <form onSubmit={handleSubmit}>
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
        <button className="btn #673ab7 deep-purple" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
