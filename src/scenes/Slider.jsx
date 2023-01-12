import { useState } from "react";
import DotGroup from "./DotGroup";
import Landing from "./Landing";
import MySkills from "./MySkills";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import useMediaQuery from "../hooks/useMediaQuery";
import AwesomeSlider from "react-awesome-slider";
import my from "../assets/styles.css";
import LineGradient from "../components/LineGradient";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { motion } from "framer-motion";



export default function Slider() {

  const [selectedPage, setSelectedPage] = useState("home");
  const isDesktop = useMediaQuery("(min-width: 1060px)");


  const slider = (
    <div >
      <AwesomeSlider
        cssModule={my}
        fillParent={false}
        bullets={false}
        mobileTouch={true}
        
      >
        <div>
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
         
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
        </div>
        <div>
        <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
      
        >
          <MySkills />
        </motion.div>
      </div>
        </div>
        <div>
        <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
        
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
        </div>
        <div>
        <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
        
        >
          <Testimonials />
        </motion.div>
      </div>
        </div>
        <div>
        <div className="w-4/6 mx-auto md:h-full  ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
         
        >
          <Contact />
        </motion.div>
      </div>
        </div>
      </AwesomeSlider>
    </div>
  );
  return <div>{slider}</div>;
}
