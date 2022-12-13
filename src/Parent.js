import * as React from "react";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SourceSans3 from "./fonts/SourceSans3-Regular.ttf"; // don't remove
import robotoRegular from "./fonts/Roboto-Regular.ttf"; // don't remove

import App from "./App";
import { useCallback } from "react";
export const themeContext = createContext(null);

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const light = {
    typography: {
      fontFamily: [
        "robotoRegular",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },

    palette: {
      mode: "light",
      background: {
        default: "#fff",
        primary: "#f8f8f8",
      },

      text: {
        default: "#333",
        primary: "#000",
        secondary: "#999",
      },
    },
  };

  const dark = {
    typography: {
      fontFamily: [
        "robotoRegular",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    palette: {
      mode: "dark",
      background: {
        default: "#181818",
        primary: "#191919",
        secondary: "#000",
      },

      text: {
        default: "#f8f8f8",
        primary: "#f6f6f6",
        secondary: "#4f5874",
      },
    },
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = useCallback(() => {
    setIsDarkTheme(!isDarkTheme);
  }, [isDarkTheme]);

  return (
    <themeContext.Provider
      value={{
        func: changeTheme,
        isDark: isDarkTheme,
      }}
    >
      <ThemeProvider
        theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
      >
        <App />
      </ThemeProvider>
    </themeContext.Provider>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
