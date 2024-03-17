import { useRef, useEffect, useState } from "react";
import Landing from "./Landing.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import Work from "./Work.jsx";
import Info from "./Info.jsx";

const Page = () => {
  const landingRef = useRef(null);
  const workRef = useRef(null);
  const infoRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 120,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const landingOffset = landingRef.current.offsetTop;
      const workOffset = workRef.current.offsetTop;
      const infoOffset = infoRef.current.offsetTop;
      let activeSection = '';
      if (scrollPosition < landingOffset) {
        activeSection = 'home';
      }
      else if (scrollPosition < workOffset) {
        activeSection = 'work';
      }
      else {
        activeSection = 'info';
      }
      setActiveSection(activeSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div>
      <NavBar scrollToRef={scrollToRef} activeSection={activeSection} landingRef={landingRef} workRef={workRef} infoRef={infoRef} />
      <Landing reference={landingRef} />
      <Work reference={workRef} />
      <Info reference={infoRef} />
    </div>
  )
}

export default Page;