import { useState } from "react";
import "./App.css";
/* components */
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
    </div>
  );
}

export default App;
