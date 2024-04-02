import React from "react";
import Logo from "../assets/svg/logo.svg";
import Profile from "../assets/about-profile.png";
import be from "../assets/svg/behance.svg";
import lnk from "../assets/svg/linkedin.svg";
import ig from "../assets/svg/instagram.svg";
import arrow from "../assets/svg/arrow-up-right.svg";
import flag from "../assets/flag.png";
import CV from "/CV-MARTORANOPEROZZI.pdf?url";
import { useMediaQuery } from "react-responsive";
const Info = ({ reference }) => {
  const isnt1024px = useMediaQuery({ minWidth: 1024 });
  return (
    <div ref={reference} className="h-auto mb-5 mt-200px">
      <div className="container d-flex text-light flex-column gap-7">
        <div className="row d-flex justify-content-between background-info">
          <div className="col-12 col-lg-7 d-flex flex-column">
            <h4 className="info-title">INFO</h4>
            <h6 className="aboutme-title">About me.</h6>
            <div>
              <br />
              <p className="jm-text">
                I’m Joaquín Martorano, from Argentina!{" "}
                <img src={flag} className="flag" />
              </p>
              <br />
              <p className="aboutme-txt">
                My passion about design started when i was just a kid, at 10
                years old. I started designing banners, thumbnails and intros
                for videos on Youtube,{" "}
                <span style={{ color: "#3EC372" }}>just for fun.</span>
                <br />
                <br />
                It was then when i started mastering my skills using editing and
                design software, but had no design thinking until i got to
                college.
                <br />
                <br />I studied Industrial design and now, with
                <span style={{ color: "#3EC372" }}> 23 years old</span>, I have
                a lot of multidisciplinary experience to share and make value
                of.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex flex-column-reverse align-items-end gap-6">
            <img src={Profile} alt="profile" className="photo-about" />
            <img src={Logo} alt="logo" className="logo-about" />
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <button className="col-12 col-lg-4 btn-contact">
            <span className="btn-contact-text">
              <a href={CV} target="_blank" className="link">
                CV RESUME <img src={arrow} />
              </a>
            </span>
          </button>
          <div className={`col-12 col-lg-8 mt-5 mt-lg-0 d-flex layers ${isnt1024px ? "justify-content-end" : "justify-content-center"}`}>
            <a href="https://www.behance.net/joaquinmartora1" target="_blank">
              <img src={be} alt="be layer" className="icon-social" />
            </a>
            <a
              href="https://www.linkedin.com/in/joaquinmartorano/"
              target="_blank"
            >
              <img src={lnk} alt="linkedin layer" className="icon-social" />
            </a>
            <a href="https://www.instagram.com/jmartorano_/" target="_blank">
              <img src={ig} alt="instagram layer" className="icon-social" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
