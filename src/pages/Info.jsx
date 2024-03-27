import React from "react";
import Logo from "../assets/logo.png";
import Profile from "../assets/about-profile.png";

const Info = ({ reference }) => {
  return (
    <div ref={reference} className="ht-100">
      <div className="container d-flex text-light mt-120px">
        {/* About */}
        <div className="d-flex flex-column p-2">
          <h4 className="info-title">INFO</h4>
          <h6 className="aboutme-title">About me.</h6>
          <div>
            <p className="jm-text">I’m Joaquín Martorano, from Argentina! 🇦🇷</p>
            {/* Cambiar el AR por la bandera arg */}
            <p className="aboutme-txt">
              My passion about design started when i was just a kid, at 10 years
              old. I started designing banners, thumbnails and intros for videos
              on Youtube,{" "}
              <span style={{ color: "#3EC372" }}>just for fun.</span>
            </p>
            <p className="aboutme-txt">
              It was then when i started mastering my skills using editing and
              design software, but had no design thinking until i got to
              college.
            </p>
            <p className="aboutme-txt">
              I studied Industrial design and now, with
              <span style={{ color: "#3EC372" }}>23 years old</span>, I have a
              lot of multidisciplinary experience to share and make value of.
            </p>
          </div>
        </div>
        {/* Photo & Logo*/}
        <div className="p-2">
          <img src={Logo} alt="logo" className="logo-about" />
          <img src={Profile} alt="profile" className="photo-about" />
        </div>
      </div>
      {/* Button & Icons */}
      <div className="d-flex justify-content-between align-items-center">
        {/* Button */}
        <button className="btn-contact">
          <span className="btn-contact-text">CV RESUME ↗️</span>
        </button>
        {/* Icons */}
        <div>Icons Here</div>
      </div>
    </div>
  );
};

export default Info;
