import React, { useState, useEffect, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Home from "./components/Home.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

const App = () => {
  const [currentView, setCurrentview] = useState("home");

  if (currentView === "home") {
    return <Home />;
  }
};

export default App;
