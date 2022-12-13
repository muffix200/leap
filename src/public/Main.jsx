import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
// import ReactPlayer from "react-player/lazy";
import Button from "@mui/material/Button";
// import SIdebar from "../components/SIdebar";
import Nav from "../components/Nav";
import MainContent from "../components/MainContent";

export default function Main() {
  const [playing, setplaying] = useState(true);
  return (
    <Box sx={{ height: "100%", overflow: "auto" }}>
      <Nav />
      <MainContent />
    </Box>
  );
}
