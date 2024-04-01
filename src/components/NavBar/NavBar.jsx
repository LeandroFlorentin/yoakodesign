import logo from "../../assets/svg/logo.svg";
import instagram from "../../assets/instagram.png";
import discord from "../../assets/discord.png";
import { useMediaQuery } from "react-responsive";
import OffCanvasTop from "../OffCanvasTop/OffCanvasTop";
const NavBar = ({
  scrollToRef,
  activeSection,
  landingRef,
  workRef,
  infoRef,
  contactRef
}) => {
  const mediaNav = useMediaQuery({ query: "(max-width:426px)" });
  let array = [
    {
      description: "home",
      valor: "landing",
      className: mediaNav
        ? "fs-16 text-light pointer col-4 text-center pb-2 position-relative overflow-hidden navbar-txt"
        : "fs-16 text-light me-6 pointer position-relative overflow-hidden navbar-txt",
    },
    {
      description: "work",
      valor: "work",
      className: mediaNav
        ? "fs-16 text-light pointer col-4 text-center pb-2 position-relative overflow-hidden navbar-txt"
        : "fs-16 text-light me-6 pointer position-relative overflow-hidden navbar-txt",
    },
    {
      description: "info",
      valor: "info",
      className: mediaNav
        ? "fs-16 text-light pointer col-4 text-center pb-2 position-relative overflow-hidden navbar-txt"
        : "fs-16 text-light me-6 pointer position-relative overflow-hidden navbar-txt",
    },
    {
      description: "contact",
      valor: "contact",
      className: mediaNav
        ? "fs-16 text-light pointer col-4 text-center pb-2 position-relative overflow-hidden navbar-txt"
        : "fs-16 text-light me-6 pointer position-relative overflow-hidden navbar-txt",
    },
  ];
  return (
    <div className="row m-0 p-0 d-flex align-items-center justify-content-between position-sticky nav mt-4">
      <OffCanvasTop >
        <div>
          <div className="row d-flex align-items-center justify-content-center h-100 flex-wrap">
            {array.map((value, key) => (
              <div
                key={key}
                className="col-3 text-light text-center"
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
          <div className="d-flex justify-content-center align-items-center mt-4">
            <a href="https://discord.com/users/452667114126442497" target="_blank">
              <img className="me-4 width-img-dc" src={discord} alt="discord" />
            </a>
            <div className="linea me-2 ms-2"></div>
            <a href="https://www.instagram.com/jmartorano_/" target="_blank">
              <img
                className="ms-4 width-img-ig"
                src={instagram}
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </OffCanvasTop>
      <div className="col-5 col-lg-2">
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
            ? "col-12 col-lg-10 d-flex align-items-center justify-content-center flex-wrap d-none d-lg-flex"
            : "col-12 col-lg-10 d-flex align-items-center justify-content-end flex-wrap d-none d-lg-flex"
        }
      >
        <div
          className={
            mediaNav
              ? "d-flex flex-wrap justify-content-center col-12 d-none d-lg-flex"
              : "d-flex flex-wrap justify-content-center d-none d-lg-flex"
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
          <a href="https://discord.com/users/452667114126442497" target="_blank">
            <img className="me-4 width-img-dc" src={discord} alt="discord" />
          </a>
          <div className="linea me-2 ms-2"></div>
          <a href="https://www.instagram.com/jmartorano_/" target="_blank">
            <img
              className="ms-4 width-img-ig"
              src={instagram}
              alt="instagram"
            />
          </a>
        </div>
      </div>
      <div className="col-5 d-block d-lg-none text-end me-4">
        <i className="bi bi-list text-light tamano-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"></i>
      </div>
    </div>
  );
};
export default NavBar;
