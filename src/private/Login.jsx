import React, { useEffect } from "react";
import ThemeButton from "../components/ThemeButton";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Divider, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import AOS from 'aos';



export default function Login() {
  
  useEffect(() => {
    AOS.init();
  }, [])
  
  const navigate= useNavigate()
  return (
    <div className="register-wrapper" data-aos="fade-up">
    <div className="register_nav">
    <div className="register_nav--back">
    <IconButton onClick={()=>{
navigate("/")
    }} sx={{marginRight:"10px"}}>
    <KeyboardBackspaceRoundedIcon/>
    </IconButton>
    <Typography sx={{color:"text.default"}}>Bosh sahifa</Typography>
    </div>
    <ThemeButton />
    </div>
    <Divider
        className="divider-main"
   />
      <div className="form-section">
        <Form type="login"/>
      </div>
    </div>
  )
}
