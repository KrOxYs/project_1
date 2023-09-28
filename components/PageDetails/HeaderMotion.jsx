import Navbar from "./scenes/Navbar";
// import Landing from "./scenes/Landing";
// import DotGroup from "./scenes/DotGroup";
// import MySkills from "./scenes/MySkills";
// import Projects from "./scenes/Projects";
// import Contact from "./scenes/Contact";
// import Footer from "./scenes/Footer";
// import Testimonials from "./scenes/Testimonials";
import useMediaQuery from "./hooks/useMediaQuery.jsx";
import LineGradient from "./components/LineGradient.jsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextDetail from "../details/ImageSlider.jsx"
import PageDetails from ".";

function HeaderMotion({product}) {
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
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {/* {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )} */}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <TextDetail rowID1="1" rowID2="2" productReview={product} setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin=""
          // amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <PageDetails product={product}/>
        </motion.div>
      </div>
      {/* <LineGradient />
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
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default HeaderMotion;
