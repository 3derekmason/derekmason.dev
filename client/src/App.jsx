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
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography color="primary" element="h1" variant="h1">
          <Home />
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default App;
