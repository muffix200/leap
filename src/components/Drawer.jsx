import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

// --------------------------------
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
// --------------------------------
import { IconButton } from "@mui/material";
import { themeContext } from "../Parent";
import { useNavigate } from "react-router-dom";

export default function SwipeableTemporaryDrawer() {
  const navigate = useNavigate()
  const { isDark: isDarkTheme, func } = React.useContext(themeContext);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Asosiy", "Kurslar", "Fikrlar", "Bog'lanish", "Test"].map(
          (text, index) => (
            <ListItem onClick={() => {
              switch(index){
                case 0:
                setTimeout(()=>{
                  window.location.href="#home"
                },100)

                break;
                case 1:
                  setTimeout(()=>{
                  window.location.href="#courses"
                },100)

                break;
                case 2:
                  setTimeout(()=>{
                  window.location.href="#feedback"
                },100)
                break;
                case 3:
                  setTimeout(()=>{
                    window.open('tel:950777704', '_self');
                },100)
                break;
                case 4:
                  setTimeout(()=>{
                  window.location.href="#test"
                },100)
                break;
                
              }
            }} key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index == 0 ? (
                    <HomeRoundedIcon />
                  ) : index == 1 ? (
                    <SchoolRoundedIcon />
                  ) : index == 2 ? (
                    <ChatRoundedIcon />
                  ) : index == 3 ? (
                    <PermPhoneMsgRoundedIcon />
                  ) : (
                    index == 4 && <QuizRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Shaxsiy kabinet","Sozlamalar"].map((text, index) => (
          <ListItem key={text} disablePadding onClick={()=>{
            switch(index){
              case 0:
              navigate("/register")
              break;
              case 1:
              break;
            }
          }}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <PersonRoundedIcon/>:<SettingsRoundedIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="mobile_menu">
      <IconButton
        sx={{
          marginLeft: "10px",
          width: "30px",
          height: "30px",
          border: isDarkTheme
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(0,0,0,0.1)",
          backgroundColor: isDarkTheme
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)",
        }}
        onClick={toggleDrawer("right", true)}
      >
        <MenuRoundedIcon />
      </IconButton>

      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </div>
  );
}
