import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { themeContext } from "../Parent";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BasicModal from "./Modal";
export default function FeedbackBox({ data }) {
  const { isDark: isDarkTheme, func } = useContext(themeContext);
  const [modal,setModal]=useState({isVisible:false,context:false,link:false,name:false})
  
  const openModal=(context,link,name)=>{
    setModal({isVisible:true,context:context,link:link,name:name})
  }

   const closeModal=()=>{
    setModal({isVisible:false,context:false,link:false,name:false})
   }
  
  
  return (
    <>
    <BasicModal value={modal} handleClose={()=>{closeModal()}}/>
    <div className="Corousel__item2">
      <div
        className="Corousel__item__div2"
        style={{
          border: isDarkTheme ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        <div>
          <p
            className="feedback-paragraph"
            style={{ color: isDarkTheme ? "#fff" : "#181818" }}
          >
            {data?.name}
          </p>

          {Boolean(data?.url) ? (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                padding: "15px",
              }}
            >
              <MusicNoteIcon sx={{ color: "#3F8AE0" }} />
              <p
                className="feedback-message"
                style={{ color: isDarkTheme ? "#fff" : "#181818" }}
              >
                Bu foydalanuvchi tomondan ovozli xabar qoldirilgan
              </p>
            </div>
          ) : (
            <p
              className="feedback-message"
              style={{
                color: isDarkTheme ? "#fff" : "#181818",
                padding: "15px",
              }}
            >
              {data?.comment?.slice(0, 90)} ...
            </p>
          )}
        </div>

        <Button
          onClick={()=>openModal(data?.comment,data?.url,data?.name)}
          sx={{
            borderRadius: "20px",
            // backgroundColor: "#3F8AE0",
            color: "#3F8AE0",
            width: "90%",
            margin: "10px auto",
          }}
        >
          {Boolean(data?.url) ? "Eshitish" : "To'liq o`qish"}
        </Button>
      </div>
    </div>
    </>
  );
}
