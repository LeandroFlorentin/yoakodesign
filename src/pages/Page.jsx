import { useRef, useEffect, useState } from "react";
import Landing from "./Landing.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import Work from "./Work.jsx";
import Info from "./Info.jsx";
import Contact from "./Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Page = () => {
  const landingRef = useRef(null);
  const workRef = useRef(null);
  const infoRef = useRef(null);
  const contactRef = useRef(null);
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
      const contactOffset = contactRef.current.offsetTop;
      let activeSection = "";
      if (scrollPosition > landingOffset && scrollPosition < workOffset) {
        activeSection = "landing";
      } else if (scrollPosition > workOffset && scrollPosition < infoOffset) {
        activeSection = "work";
      }
      else if (scrollPosition > infoOffset && scrollPosition < contactOffset) {
        activeSection = "info";
      }
      else {
        activeSection = "contact";
      }
      setActiveSection(activeSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="container-lg">
      <div className="div-root">
        <NavBar
          scrollToRef={scrollToRef}
          activeSection={activeSection}
          landingRef={landingRef}
          workRef={workRef}
          infoRef={infoRef}
          contactRef={contactRef}
        />
        <Landing reference={landingRef} scrollToRef={scrollToRef} workRef={workRef} contactRef={contactRef} />
        <Work reference={workRef} />
        <Info reference={infoRef} />
        <Contact reference={contactRef} />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
