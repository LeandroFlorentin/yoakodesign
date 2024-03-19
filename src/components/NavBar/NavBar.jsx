import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import discord from "../../assets/discord.png";
import { useMediaQuery } from "react-responsive";
const NavBar = ({
  scrollToRef,
  activeSection,
  landingRef,
  workRef,
  infoRef,
}) => {
  const mediaNav = useMediaQuery({ query: "(max-width:426px)" });
  let array = [
    {
      description: "home",
      valor: "landing",
      className: mediaNav
        ? "fs-5 text-light pointer col-4 text-center pb-2"
        : "fs-5 text-light me-6 pointer",
    },
    {
      description: "work",
      valor: "work",
      className: mediaNav
        ? "fs-5 text-light pointer col-4 text-center pb-2"
        : "fs-5 text-light me-6 pointer",
    },
    {
      description: "info",
      valor: "info",
      className: mediaNav
        ? "fs-5 text-light pointer col-4 text-center pb-2"
        : "fs-5 text-light me-6 pointer",
    },
  ];
  return (
    <div className="row m-0 p-0 d-flex align-items-center justify-content-between nav">
      <div className="col-12 col-lg-2">
        <img
          src={logo}
          onClick={() => scrollToRef(landingRef)}
          className="tamano-logo pointer"
          alt="Joaco"
        />
      </div>
      <div
        className={
          mediaNav
            ? "col-12 col-lg-10 d-flex align-items-center justify-content-center flex-wrap"
            : "col-12 col-lg-10 d-flex align-items-center justify-content-end flex-wrap"
        }
      >
        <div
          className={
            mediaNav
              ? "d-flex flex-wrap justify-content-center col-12"
              : "d-flex flex-wrap justify-content-center"
          }
        >
          {array.map((value, key) => (
            <div
              key={key}
              className={value.className}
              onClick={() => scrollToRef(eval(value.valor + "Ref"))}
            >
              <span
                className={
                  activeSection === value.valor ? "active" : "hover-active"
                }
              >
                {value.description}
              </span>
            </div>
          ))}
        </div>
        <div
          className={
            mediaNav
              ? "d-flex align-items-center justify-content-center"
              : "d-flex align-items-center me-5"
          }
        >
          <img className="me-4" src={discord} alt="discord" />
          <div className="linea me-2 ms-2"></div>
          <a href="https://www.instagram.com/jmartorano_/" target="_blank">
            <img className="ms-4" src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
