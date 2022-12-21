import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import { Typography, TextField, Button, IconButton, Snackbar, CircularProgress, Checkbox, FormControlLabel } from '@mui/material';
import axios from "axios";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useQuery } from 'react-query';
import { getRequest } from '../utils/Api';
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import { Base64 } from 'js-base64';

export default function Form({ type }) {


  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const navigate = useNavigate()
  const [formControl, setFormControl] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    checkPass: "",
  })

  const [showPassword, setShowPassword] = React.useState(false);
  const [remember, setRemember] = useState(false)

  const [open, setOpen] = React.useState({ isVisible: false, text: "", type: "" });
  const [makeLoading, setMakeLoading] = useState(false)

  const handleClick = (text, type) => {
    setOpen(prev => ({ ...prev, isVisible: true, type: type, text: text }));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(prev => ({ ...prev, isVisible: false }));
  };


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const sendRequest = () => {
    const body = JSON.stringify({
      full_name: formControl.name.trim(),
      email: formControl.email.trim(),
      password: formControl.password.trim()
    })
    axios
      .post("https://leap-english.lavina.tech/api/v1/users/signup", body, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((res) => {
        setMakeLoading(false)
        if (res?.data?.isOk) {

          const userData = JSON.stringify(res.data.data.user)
          localStorage.setItem("userStatus", "register")
          localStorage.setItem("userInfo", userData)
          localStorage.setItem("token", "")
          localStorage.setItem("base64", Base64.encode(formControl.password))
          navigate("/register")
        } else {
          handleClick("xatolik", "error")
        }

      })
      .catch((err) => {
        setMakeLoading(false)
        handleClick(err?.response?.data?.message, "error")
      });

  }
  const signinRequest = () => {

    const body = JSON.stringify({
      email: formControl.email.trim(),
      password: formControl.password.trim()
    })

    axios
      .post("https://leap-english.lavina.tech/api/v1/users/signin", body, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
      })
      .then((res) => {
        setMakeLoading(false)
        if (res?.data?.isOk) {
          const userData = JSON.stringify(res.data.data.user)
          localStorage.setItem("userStatus", remember ? "active" : "login")
          localStorage.setItem("userInfo", userData)
          localStorage.setItem("token", res.data.data.accessToken)
          navigate("/profile")
          console.log(res.data.data.user);
        } else {
          handleClick("xatolik", "error")
        }

      })
      .catch((err) => {
        setMakeLoading(false)
        handleClick(err?.response?.data?.message, "error")
      });

  }


  const handleChange = (value) => {
    setFormControl(prev => ({ ...prev, [value.target.name]: value.target.value }))
  };

  const checkResult = () => {
    setMakeLoading(true)

    if (type === "register") {

      if (formControl.name.trim() !== "" && formControl.age.trim() !== "" && formControl.age.trim() > 10 && formControl.age.trim() < 80 && formControl.email.trim() !== "" && formControl.password.trim() !== "" && formControl.checkPass !== "" && formControl.password === formControl.checkPass) {
        sendRequest()
      }
      else {
        handleClick("Malumotlarni tog`ri to`ldiring !", "error")
        resetForm()

      }

    } else if (type === "login") {
      if (formControl.email.trim() !== "" && formControl.password.trim() !== "" && formControl.checkPass !== "" && formControl.password === formControl.checkPass) {
        signinRequest()
      }
      else {
        handleClick("Malumotlarni tog`ri to`ldiring !", "warning")
        resetForm()

      }
    }

  }

  const resetForm = () => {
    setMakeLoading(false)
    setFormControl({
      name: "",
      age: "",
      email: "",
      password: "",
      checkPass: "",
    })

  }

  const { data: ipAddress } = useQuery("ip", () => getRequest("https://api.ipify.org/?format=json"), {
    staleTime: 30 * 1000 * 60,
    cacheTime: 30 * 1000 * 60,
    refetchOnWindowFocus: false,
  })




  return (
    <>
      <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open.isVisible} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={open.type} sx={{ width: '100%' }}>
          {open.text}
        </Alert>
      </Snackbar>

      <div className='form-paragraph'>
        <Typography sx={{ color: "text.default" }}>{type === "register" ? "Ro'yxatdan o'tish" : "Xisobga kirish"}</Typography>
      </div>
      <div className='form-wrapper'>
        <FormControl fullWidth>
          {type === "register" && (
            <>
              <TextField name="name" value={formControl.name} onChange={(value) => handleChange(value)} required
                sx={{ marginTop: "20px" }} id="name" label="Ism Familiyangiz" variant="outlined" />
              <TextField type="number" name="age" value={formControl.age} onChange={(value) => handleChange(value)} required sx={{ marginTop: "20px" }} id="age" label="yoshingiz" variant="outlined" />
            </>
          )
          }

          <TextField name="email" value={formControl.email} onChange={(value) => handleChange(value)} required sx={{ marginTop: "20px" }} id="email" label="Email manzilingiz" variant="outlined" />
          <TextField InputProps={{
            endAdornment: <IconButton onClick={handleClickShowPassword} position="end">{showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>,
          }} name="password" value={formControl.password} onChange={(value) => handleChange(value)} required type={showPassword ? 'text' : 'password'} sx={{ marginTop: "20px" }} id="password" label="Parol" variant="outlined" />
          <TextField name="checkPass" value={formControl.checkPass} onChange={(value) => handleChange(value)} required type={showPassword ? 'text' : 'password'} sx={{ marginTop: "20px" }} id="checkpassword" label="Parolni qaytaring" variant="outlined" />

          {type === "login" && <FormControlLabel sx={{ color: "text.default" }} control={<Checkbox checked={remember} onChange={() => {
            setRemember(e => !e)
          }} />} label="Meni eslab qol" />}

          <Button disabled={makeLoading} onClick={checkResult} fullWidth size='large' sx={{ marginTop: "20px" }} variant="contained">{makeLoading ? <CircularProgress /> : type === "register" ? "Ro'yxatdan o'tish" : "Xisobga kirish"}</Button>

          <Button onClick={() => {
            navigate(type === "register" ? "/login" : "/register")
          }} fullWidth size='small' sx={{ marginTop: "10px" }} variant="text">{type === "register" ? "Xisobga kirish" : "Ro'yxatdan o'tish"}</Button>

        </FormControl>
      </div>
      {ipAddress && <div className='form-paragraph'>
        <Typography variant='body2' sx={{ color: "text.default", marginTop: "20px" }}>Sizning ip manzilingiz: {ipAddress?.ip}</Typography>
      </div>}
    </>
  )

}
