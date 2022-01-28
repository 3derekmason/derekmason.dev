import React, { useState, useEffect, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

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
          Coming soon
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default App;
