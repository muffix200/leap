import { Divider, IconButton, Link, Tooltip, Typography } from "@mui/material";
import React, { useContext } from "react";
import { themeContext } from "../Parent";
import ThemeButton from "./ThemeButton";
import logo from "../assets/icons/logo.png";
import SelectSmall from "./Select";
import SwipeableTemporaryDrawer from "./Drawer";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

export default function Nav() {
  const { isDark: isDarkTheme, func } = useContext(themeContext);
  return (
    <div className="fake-nav">
      <div
        data-color={isDarkTheme ? "dark" : "light"}
        className="navbar"
        style={{
          borderBottomColor: isDarkTheme
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)",
          // backgroundColor: isDarkTheme
          //   ? "rgba(24, 24, 24, 0.9)"
          //   : "rgba(255,255,255,0.9)",
        }}
      >
        <img className="logo" src={logo} />
        <ul className="nav__ul">
          <Link
            href="#home"
            variant="body1"
            sx={{
              color: "text.default",
              textDecoration: "none",
              margin: "0 15px",
            }}
          >
            Asosiy
          </Link>
          <Link
            href="#courses"
            variant="body1"
            sx={{
              color: "text.default",
              textDecoration: "none",
              margin: "0 15px",
            }}
          >
            Kurslar
          </Link>
          <Link
            href="#test"
            variant="body1"
            sx={{
              color: "text.default",
              textDecoration: "none",
              margin: "0 15px",
            }}
          >
            Test
          </Link>
          <Link
            href="#feedback"
            variant="body1"
            sx={{
              color: "text.default",
              textDecoration: "none",
              margin: "0 15px",
            }}
          >
            Fikrlar
          </Link>
          <Link
            href="#"
            variant="body1"
            sx={{
              color: "text.default",
              textDecoration: "none",
              margin: "0 15px",
            }}
          >
            Bog'lanish
          </Link>
        </ul>
        <div className="nav__icons">
          <IconButton
          onClick={()=>{
            window.open('tel:950777704', '_self');
          }}
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: isDarkTheme
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
              marginRight: "10px",
            }}
          >
          <Tooltip  title="95) 077-77-04" arrow >
            <LocalPhoneRoundedIcon  sx={{ color: "#11B86D" }} fontSize="small" />
            </Tooltip>
          </IconButton>
          <SelectSmall />
          <ThemeButton />
          <SwipeableTemporaryDrawer />
        </div>
      </div>
    </div>
  );
}
