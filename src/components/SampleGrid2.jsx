import { Button } from "@mui/material";
import React, { useContext } from "react";
import imgNout from "../assets/img/register.png";
import { themeContext } from "../Parent";
export default function SampleGrid2() {
  const { isDark: isDarkTheme, func } = useContext(themeContext);
  return (
    <div className="sampleGrid">
      <div className="itemOne">
        <img src={imgNout} />
      </div>

      <div className="itemTwo">
        <div>
          <h1 style={{ color: isDarkTheme ? "#fff" : "#181818" }}>
            Kursga yozilish jarayoni
          </h1>
          <p
            style={{
              color: isDarkTheme ? "#fff" : "#181818",
              borderColor: isDarkTheme
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            }}
          >
            100 dona testdan o`ting va darajangizni aniqlab oling
          </p>
          <p
            style={{
              color: isDarkTheme ? "#fff" : "#181818",
              borderColor: isDarkTheme
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            }}
          >
            Kurs narxlari bilan yuqorida tanishib chiqing
          </p>
          <p
            style={{
              color: isDarkTheme ? "#fff" : "#181818",
              borderColor: isDarkTheme
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            }}
          >
            quyidagi link yordamida ro`yxatdan o`ting, siz bilan bog'lanishadi
          </p>
          <p
            style={{
              color: isDarkTheme ? "#fff" : "#181818",
              //   borderColor: isDarkTheme
              //     ? "rgba(255,255,255,0.1)"
              //     : "rgba(0,0,0,0.1)",
              border: "none",
            }}
          >
            To'lovdan so'ng kurslarimizdan foydalaning
          </p>
        </div>
        <Button
        onClick={()=>{
          window.open("https://t.me/leapsupport")
        }}
          fullWidth
          sx={{
            "&:hover": {
              backgroundColor: "#11B86D",
            },
            background: "#11B86D",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          Kursga yozilish
        </Button>
      </div>
    </div>
  );
}
