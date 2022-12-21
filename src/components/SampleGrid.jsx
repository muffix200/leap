import { Button } from "@mui/material";
import React, { useContext } from "react";
import imgNout from "../assets/img/mobile.png";
import { themeContext } from "../Parent";
export default function SampleGrid() {
  const { isDark: isDarkTheme, func } = useContext(themeContext);
  return (
    <div className="sampleGrid">
      <div className="itemOne">
        <img src={imgNout} />
      </div>
      <div className="itemTwo">
        <div>
          <h1 style={{ color: isDarkTheme ? "#fff" : "#181818" }}>
            Bizning test platformamizga tashrif buyuring
          </h1>
          <p
            style={{
              color: isDarkTheme ? "#fff" : "#181818",
              borderColor: isDarkTheme
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            }}
          >
            100 dona test
          </p>
          <p
            style={{
              color: isDarkTheme ? "#fff" : "#181818",
              borderColor: isDarkTheme
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            }}
          >
            Qulay interfeys
          </p>
          <p
            style={{
              color: isDarkTheme ? "#fff" : "#181818",
              // borderColor: isDarkTheme
              //   ? "rgba(255,255,255,0.1)"
              //   : "rgba(0,0,0,0.1)",
              border: "none",
            }}
          >
            Test yakunida aniq statistika
          </p>
        </div>
        <Button
        onClick={()=>{
          window.open("https://ornate-lily-48ebc7.netlify.app/")
        }}
          fullWidth
          sx={{
            "&:hover": {
              backgroundColor: "#3F8AE0",
            },
            background: "#3F8AE0",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          Testni boshlash
        </Button>
      </div>
    </div>
  );
}
