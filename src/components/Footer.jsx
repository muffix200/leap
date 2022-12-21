import React from 'react'
import {  IconButton, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <>
    <div  className='footer'>
      <Typography sx={{color:"text.default"}}>
        &copy;Leap English 2022
       </Typography>

       <div>

       <IconButton 
       onClick={()=>{
        window.open("https://t.me/leapenglish")
       }}
       >
       <TelegramIcon color='primary' fontSize='small'/>
       </IconButton>

       <IconButton onClick={()=>{
        window.open("https://www.instagram.com/leapenglish/")
       }}>
       <InstagramIcon sx={{color:" #d62976"}} fontSize='small'/>
       </IconButton>

       <IconButton onClick={()=>{
        window.open("https://www.youtube.com/c/leapenglish")
       }}>
       <YouTubeIcon sx={{color:"red"}} fontSize='small'/>
       </IconButton>
       </div>

    </div>
    </>
  )
}
