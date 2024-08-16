import { useState } from "react";
import "./App.css";
/* components */
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Projects />
    </div>
  );
}

export default App;
