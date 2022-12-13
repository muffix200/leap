import React, { useContext, useState } from "react";
import { themeContext } from "../Parent";

export default function Card({ title, duration, amount }) {
  const [color, setColor] = useState("light");
  const { isDark: isDarkTheme, func } = useContext(themeContext);

  return (
    <div className="Corousel__item">
      <div
        style={{
          border: isDarkTheme ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
        className="Corousel__item__div"
      >
        <div className="color-sea">
          <h1>
            {title} ({duration})
          </h1>
        </div>
        <div style={{ margin: "0 20px" }}>
          <p
            style={{
              fontFamily: "Montserrat",
              color: isDarkTheme ? "#f8f8f8" : "#181818",
            }}
          >
            Har hafta:
          </p>
        </div>
        <div
          className="flex-img"
          style={{
            borderBottomColor: isDarkTheme
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
          }}
        >
          <i
            style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}
            className="fa fa-caret-square-o-up fa-lg"
          ></i>
          <p style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}>
            Video darslar
          </p>
        </div>

        {/* <div className="flex-img">
          <i className="fa fa-caret-square-o-up fa-lg"></i>
          <p>Zoom speaking va sovol javoblar</p>
        </div> */}

        <div
          className="flex-img"
          style={{
            borderBottomColor: isDarkTheme
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
          }}
        >
          <i
            style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}
            className="fa fa-caret-square-o-up fa-lg"
          ></i>
          <p style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}>
            Zoom speaking va sovol javoblar
          </p>
        </div>
        {/* --------------------- */}

        {/* <div className="flex-img">
          <i className="fa fa-caret-square-o-up fa-lg"></i>
          <p>Yuqori darajali Testlar</p>
        </div> */}

        <div
          className="flex-img"
          style={{
            borderBottomColor: isDarkTheme
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
          }}
        >
          <i
            style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}
            className="fa fa-caret-square-o-up fa-lg"
          ></i>
          <p style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}>
            Yuqori darajali Testlar
          </p>
        </div>

        {/* <div className="flex-img">
          <i className="fa fa-bullseye fa-lg"></i>
          <p>C1 darajadagi mentor nazorati</p>
        </div> */}

        <div
          className="flex-img"
          style={{
            borderBottomColor: isDarkTheme
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
          }}
        >
          <i
            style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}
            className="fa fa-bullseye fa-lg"
          ></i>
          <p style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}>
            C1 darajadagi mentor nazorati
          </p>
        </div>

        {/* <div className="flex-img">
          <i className="fa fa-bullseye fa-lg"></i>
          <p>Bekhzod Botirov bilan Zoom meeting</p>
        </div> */}

        <div
          className="flex-img"
          style={{
            borderBottomColor: isDarkTheme
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
          }}
        >
          <i
            style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}
            className="fa fa-bullseye fa-lg"
          ></i>
          <p style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}>
            Bekhzod Botirov bilan Zoom meeting
          </p>
        </div>

        {/* <div className="flex-img">
          <i className="fa fa-bullseye fa-lg"></i>
          <p>Kurs oxirida Level Test</p>
        </div> */}

        <div
          className="flex-img"
          style={{
            borderBottomColor: isDarkTheme
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
          }}
        >
          <i
            style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}
            className="fa fa-bullseye fa-lg"
          ></i>
          <p style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}>
            Kurs oxirida Level Test
          </p>
        </div>

        <p
          className="amountP"
          style={{ color: isDarkTheme ? "#f8f8f8" : "#181818" }}
        >
          {" "}
          {amount}/ Oy
        </p>
      </div>
    </div>
  );
}
