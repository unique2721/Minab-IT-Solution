import "./App.css";
/* components */
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Projects from "./components/Projects/Projects";
import Partners from "./components/Partners/Partners";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Projects />
      <hr />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
