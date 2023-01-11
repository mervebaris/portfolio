import React, { useState, useEffect } from "react";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import AwesomeSlider from 'react-awesome-slider';
import mycss from "./styles.css";
import { Tune } from "@mui/icons-material";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Testimonials from "./scenes/Testimonials";
import { motion } from "framer-motion";


const slider = (
  <AwesomeSlider 
  cssModule={mycss}
  fillParent={true}
  bullets={false}
  animation="foldOutAnimation">
    <div ><Landing /></div>
    <div> <Projects /></div>
    <div>3</div>
    <div>4</div>
  </AwesomeSlider>
);

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
    <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    
    <div className="w-5/6 mx-auto md:h-full">
      {isDesktop && (
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
      >
        <Landing setSelectedPage={setSelectedPage} />
      </motion.div>
    </div>
    <LineGradient />
    <div className="w-5/6 mx-auto md:h-full ">
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("skills")}
      >
        <MySkills />
      </motion.div>
    </div>
    <LineGradient />
    <div className="w-5/6 mx-auto">
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("projects")}
      >
        <Projects />
      </motion.div>
    </div>
    <LineGradient />
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("testimonials")}
      >
        <Testimonials />
      </motion.div>
    </div>
    <LineGradient />
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("contact")}
      >
        <Contact />
      </motion.div>
    </div>
    <Footer />
  </div>
  );
}

export default App;
