import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./private/Login";
import MyProfile from "./private/MyProfile";
import Main from "./public/Main";
import Register from "./public/Register";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "background.default" }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<MyProfile />} />
      </Routes>
    </Box>
  );
}
