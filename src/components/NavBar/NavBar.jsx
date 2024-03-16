import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import discord from "../../assets/discord.png";
const NavBar = ({ scrollToRef, activeSection, landingRef, workRef, infoRef }) => {
  let array = [
    { description: "home", valor: "landing", className: "fs-5 text-light me-6 pointer" },
    { description: "work", valor: "work", className: "fs-5 text-light me-6 pointer" },
    { description: "info", valor: "info", className: "fs-5 text-light me-6 pointer" }
  ]
  return (
    <div className="d-flex align-items-center justify-content-between nav w-100 position-fixed">
      <img src={logo} className="tamano-logo" alt="Joaco" />
      <div className="d-flex align-items-center">
        {
          array.map((value, key) => (
            <div key={key} className={value.className} onClick={() => scrollToRef(eval(value.valor + "Ref"))}>
              <span>{value.description}</span>
            </div>
          ))
        }
        <div className="d-flex align-items-center me-5">
          <img className="me-4" src={discord} alt="discord" />
          <div className="linea me-2 ms-2"></div>
          <a href="https://www.instagram.com/jmartorano_/" target="_blank"><img className="ms-4" src={instagram} alt="instagram" /></a>
        </div>
      </div>
    </div>
  )
}
export default NavBar;
