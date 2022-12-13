import React, { useContext } from "react";
import { themeContext } from "../Parent";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeButton() {
  const { isDark: isDarkTheme, func } = useContext(themeContext);
  return (
    <div className="dark_icon">
      <IconButton
        onClick={func}
        sx={{
          width: "30px",
          height: "30px",
          backgroundColor: isDarkTheme
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)",
        }}
      >
        {isDarkTheme ? (
          <DarkModeIcon fontSize="small" />
        ) : (
          <LightModeIcon fontSize="small" />
        )}
      </IconButton>
    </div>
  );
}
