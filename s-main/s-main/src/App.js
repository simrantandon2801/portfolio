
import React from "react";
import { CssBaseline, Container, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
