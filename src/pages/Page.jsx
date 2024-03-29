import { useRef, useEffect, useState } from "react";
import Landing from "./Landing.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import Work from "./Work.jsx";
import Info from "./Info.jsx";
import Contact from "./Contact.jsx";

const Page = () => {
  const landingRef = useRef(null);
  const workRef = useRef(null);
  const infoRef = useRef(null);
  const [activeSection, setActiveSection] = useState("landing");

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 84,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const landingOffset = landingRef.current.offsetTop;
      const workOffset = workRef.current.offsetTop;
      const infoOffset = infoRef.current.offsetTop;
      let activeSection = "";
      if (scrollPosition > landingOffset && scrollPosition < workOffset) {
        activeSection = "landing";
      } else if (scrollPosition > workOffset && scrollPosition < infoOffset) {
        activeSection = "work";
      } else {
        activeSection = "info";
      }
      setActiveSection(activeSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="container">
      <div className="div-root">
        <NavBar
          scrollToRef={scrollToRef}
          activeSection={activeSection}
          landingRef={landingRef}
          workRef={workRef}
          infoRef={infoRef}
        />
        <Landing reference={landingRef} scrollToRef={scrollToRef} workRef={workRef} />
        <Work reference={workRef} />
        <Info reference={infoRef} />
        {/* <Contact /> */}
      </div>
    </div>
  );
};

export default Page;
