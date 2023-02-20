import "./App.scss";
import Box from "@mui/material/Box";
import { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "../Context/context";
import Side1440 from "../Side1440/Side1440";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Form from "../Form/Form";

const App = () => {
  return (
    <Box
      className="App"
      sx={{
        bgcolor: "secondary.contrastText",
        color: "text.secondary",
        transition: ".5s ease",
        height: "max-content",
      }}
    >
      <Side1440 />
      <About />
      <Skills />
      <Works />
      <Form />
    </Box>
  );
};

export const AppWrapped = () => {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
