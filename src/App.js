import React, { useState, useEffect } from "react";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px )");

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
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && [
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        ]}
        <Landing selectedPage={selectedPage} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
