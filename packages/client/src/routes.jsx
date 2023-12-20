import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Profile from "./components/Profile.jsx";
import CreateQuote from "./components/CreateQuote.jsx";
import Home from "./components/Home.jsx";
import OtherUserProfile from "./components/OtherUserProfile.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateQuote />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:userid" element={<OtherUserProfile />} />
    </Routes>
  );
};

export default AppRoutes;
