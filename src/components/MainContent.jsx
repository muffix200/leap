import { Button, Divider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../Parent";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SlickCorousel from "./Corousel/SlickCorousel";
import SwipeIcon from "@mui/icons-material/Swipe";
import SampleGrid from "./SampleGrid";
import SpeedDialTooltipOpen from "./speedDial/SpeedDial";
import CustomizedAccordions from "./Accordion/Accordion";
import SampleGrid2 from "./SampleGrid2";
import SlickCorousel2 from "./Corousel/SlickCorousel2";
import { db } from "../utils/config";
import { collection, getDocs } from "firebase/firestore";
import BasicModal from "./Modal";
import Snowfall from 'react-snowfall'
import Footer from "./Footer";
import Rules from "./Rules";

export default function MainContent() {
  const { isDark: isDarkTheme, func } = useContext(themeContext);
  const [feedbacks, setfeedbacks] = useState(false);
  const [windowWidth, setWindowWidth] = useState(false)

  const userref2 = collection(db, "users");

  const getUser = async () => {
    const data2 = await getDocs(userref2);
    setfeedbacks(data2.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    getUser();
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
  }, []);
  return (
    <>

      <div className="stickyFragment">
        {/* {windowWidth > 568 && <Snowfall   snowflakeCount={100}/>} */}
        <Rules />
        {/* <BasicModal value={}/> */}
        <div className="mainContent" id="home">
          {/* {windowWidth < 568 && <Snowfall   snowflakeCount={70}/>} */}
          <div>
            <h1 style={{ color: !isDarkTheme ? "#000" : "#f8f8f8" }}>
              ingliz tilini sifatli va oson o'rganmoqchimisiz ?
            </h1>
            <h2 style={{ color: !isDarkTheme ? "#000" : "#f8f8f8" }}>
              {" "}
              -Yordam bizdan, natija sizdan !
            </h2>
            <div className="btn-group">
              <Button
                onClick={() => {
                  window.location.href = "#video-section"
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "#11B86D",
                  },
                  backgroundColor: "#11B86D",
                  color: isDarkTheme ? "#000" : "#f8f8f8",
                  width: "150px",
                  borderRadius: "20px",
                  fontSize: "15px",
                }}
              >
                Kurs haqida
              </Button>
              <Button
                onClick={() => {
                  window.location.href = "#courses"
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "#3F8AE0",
                  },
                  backgroundColor: "#3F8AE0",
                  color: isDarkTheme ? "#000" : "#f8f8f8",
                  width: "150px",
                  borderRadius: "20px",
                  fontSize: "15px",
                  marginLeft: "15px",
                }}
              >
                Kurslar
              </Button>
            </div>
          </div>
          {/*  */}
          {/* <div className="mainContent-second">
          <img src={ill} />
        </div> */}
          {/*  */}
        </div>
        <Divider
          className="divider-main"
          sx={{
            fontSize: "30px",
            fontFamily: "Montserrat",
            fontWeight: "500",
            color: "text.default",
          }}
          textAlign="left"
        >
          Kurslarimiz bilan tanishing
        </Divider>

        <div className="course-section" id="video-section">
          <div className="video">
            <iframe
              className="iframeVideo"
              src="https://www.youtube.com/embed/Lj-anue-Jog"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen={true}
            ></iframe>
            <Button
              onClick={() => {
                window.open("https://www.youtube.com/@LeapEnglish")
              }}
              startIcon={<YouTubeIcon fontSize="large" />}
              fullWidth
              sx={{
                "&:hover": {
                  backgroundColor: "#EF0707",
                },
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EF0707",
                color: "#f8f8f8",
                borderRadius: "20px",
                marginTop: "20px",
                // height: "40px",
              }}
            >
              Bepul video darslar
            </Button>
          </div>
        </div>
        <div className="swipeIcon" id="courses">
          <div>
            <SwipeIcon
              sx={{
                fontSize: 30,
                transform: "rotate(35deg)",
                color: isDarkTheme ? "#f8f8f8" : "#181818",
              }}
            />
          </div>
        </div>
        <SlickCorousel />
        <div className="corouselButton">
          <Button
            onClick={() => {
              window.open("https://t.me/leapsupport")
            }}
            sx={{
              "&:hover": {
                backgroundColor: "#3F8AE0",
              },
              backgroundColor: "#3F8AE0",
              color: isDarkTheme ? "#f8f8f8" : "#f8f8f8",
              width: "250px",
              borderRadius: "20px",
              fontSize: "15px",
            }}
          >
            Kursga Yozilish
          </Button>
        </div>
        <Divider
          id="test"
          className="divider-main"
          sx={{
            fontSize: "30px",
            fontFamily: "Montserrat",
            fontWeight: "500",
            color: "text.default",
          }}
          textAlign="left"
        >
          Darajangizni bilmaysizmi?
        </Divider>
        <SampleGrid />
        <CustomizedAccordions />
        <Divider
          className="divider-main"
          sx={{
            fontSize: "30px",
            fontFamily: "Montserrat",
            fontWeight: "500",
            color: "text.default",
          }}
          textAlign="left"
        >
          Kursga yozilish
        </Divider>
        <SampleGrid2 />
        <Divider
          id="feedback"
          className="divider-main"
          sx={{
            fontSize: "30px",
            fontFamily: "Montserrat",
            fontWeight: "500",
            color: "text.default",
          }}
          textAlign="left"
        >
          O'quvchilarimizning fikrlari
        </Divider>

        <div style={{ marginTop: "50px" }} className="swipeIcon" id="feedback">
          <div>
            <SwipeIcon
              sx={{
                fontSize: 30,
                transform: "rotate(35deg)",
                color: isDarkTheme ? "#f8f8f8" : "#181818",
              }}
            />
          </div>
        </div>
        <SlickCorousel2 data={feedbacks} />

      </div>

      <Divider
        className="divider-main"
        sx={{
          marginTop: "10px",
          fontSize: "30px",
          fontFamily: "Montserrat",
          fontWeight: "500",
          color: "text.default",
        }}
      >
      </Divider>
      <Footer />

    </>
  );
}
