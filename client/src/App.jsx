import React, { useState, useEffect, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import AppContext from "./context.js";
import Home from "./components/Home.jsx";
import AboutMe from "./components/Bio.jsx";

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
  const [currentView, setCurrentView] = useState(<Home />);

  return (
    <AppContext.Provider value={{ currentView, setCurrentView }}>
      {currentView}
    </AppContext.Provider>
  );
};

export default App;
