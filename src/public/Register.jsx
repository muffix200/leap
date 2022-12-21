import React, { useEffect, useState } from "react";
import ThemeButton from "../components/ThemeButton";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Button, CircularProgress, Divider, IconButton, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import AOS from 'aos';


export default function Register() {
  const [userStatusChecker, setUserStatusChecker] = useState(true)
  const [userInfo, setUserInfo] = useState(false)
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    let tempData = localStorage.getItem("userStatus")
    let tempData2 = localStorage.getItem("userInfo")
    setUserInfo(JSON.parse(tempData2))
    if (tempData === "active") {
      navigate("/profile")
    }
    else if (tempData === "login") {
      navigate("/login")
    } else {
      setUserStatusChecker(tempData)
    }
    AOS.init();
  }, [location])



  return (
    <div className="register-wrapper" data-aos="fade-up">
      <div className="register_nav">
        <div className="register_nav--back">
          <IconButton onClick={() => {
            navigate("/")
          }} sx={{ marginRight: "10px" }}>
            <KeyboardBackspaceRoundedIcon />
          </IconButton>
          <Typography sx={{ color: "text.default" }}>Bosh sahifa</Typography>
        </div>
        <ThemeButton />
      </div>
      <Divider
        className="divider-main"
      />

      <div className="form-section">
        {userStatusChecker === true ? <CircularProgress /> : userStatusChecker === "register" ? <div className="reminder">
          <Typography sx={{ color: "text.default", marginBottom: "15px" }}> {userInfo?.full_name} siz ro`yxatdan o`tgansiz</Typography>
          <Divider />
          <Typography sx={{ color: "text.default", margin: "15px 0" }}>Sizning Emailingiz: {userInfo?.email}</Typography>
          <Divider />
          <Typography sx={{ color: "text.default", marginTop: "15px" }}>Adminstratorimiz bilan bog'laning va to`lov qilgandan so`ng hisobingizga kirib  kurslarimizdan foydalanishingiz mumkin: {userInfo?.email}</Typography>
          <Button variant="contained" sx={{ marginTop: "15px" }} fullWidth>Bog'lanish</Button>
          <Button onClick={() => {
            navigate("/login")
          }} variant="text" size="small" sx={{ marginTop: "15px" }} fullWidth>Hisobga kirish</Button>

        </div> : <Form type="register" />}
      </div>

    </div>
  )
}
