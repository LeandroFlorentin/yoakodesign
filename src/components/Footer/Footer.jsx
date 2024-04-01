import discord from "../../assets/footer/instagram-footer.png";
import instagram from "../../assets/footer/discord-footer.png";
const Footer = () => {
  return (
    <footer className="row mt-120px text-center pb-5">
      <div className="col-12">
        <a href="https://discord.com/users/452667114126442497" target="_blank">
          <img className="me-4 width-img-ig-footer" src={instagram} alt="instagram" />
        </a>
        <a href="https://www.instagram.com/jmartorano_/" target="_blank">
          <img className="ms-4 width-img-dc-footer" src={discord} alt="discord" />
        </a>
      </div>
      <div className="col-12 mt-4">
        <p className="text-light">© 2024 Yoako, Joaquín Martorano.</p>
      </div>
    </footer>
  )
}

export default Footer;
