import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
import discord from "../assets/contact/discord-green.png";
import Instagram from "../assets/contact/instagram-green.png";
const Contact = ({ reference }) => {
  const { register, setValue, getValues, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })
  function submitForm(e) {
    console.log(e)
  }
  return (
    <div className='h-auto text-light background-contact mt-120px' ref={reference}>
      <div className="container d-flex justify-content-center">
        <div className="row col-11 mt-120px">
          <h1 className="fw-bold text-start contact-title mb-5">Get in touch.</h1>
          <div className="col-12 col-md-6">
            <div className="col-8">
              <h4>Send me an E-mail</h4>
              <p className="color-green">I’m always open to negotiations!</p>
              <p className="ti-30">If you would like to find out more about how I can help your business, or if you would like to request a private commission, please fill out this brief form, and I will be in touch shortly. </p>
              <p>Thank you!</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(submitForm)} className="col-12 col-md-6">
            <div className="mb-3">
              <div className="row">
                <label className="fw-bold p-0 col-12">Name <small className="color-green">(required)</small></label>
                <Input className="input-contact border pt-1 pb-1 rounded-4 mt-2 col-12 col-md-5" type="text" register={register} name="name" required={true} />
              </div>
              <div className="row">
                <label className="fw-bold p-0 col-12">Email <small className="color-green">(required)</small></label>
                <Input className="input-contact border pt-1 pb-1 rounded-4 mt-2 col-12 col-md-8" type="text" register={register} name="email" required={true} />
              </div>
              <div className="row">
                <label className="fw-bold p-0 col-12">Message <small className="color-green">(required)</small></label>
                <textarea autoFocus={false} className="input-contact h-text-area border rounded-4 mt-2 col-12 col-md-8" type="text" register={register} name="message" required={true} />
              </div>
            </div>
            <button type="submit" className="btn btn-light">Send</button>
          </form>
          <div className="col-12 col-md-6 mt-120px">
            <h3>My social media.</h3>
            <p className="ti-30 col-8 ms-3">You can also contact me on my social media! I use instagram and discord.</p>
          </div>
          <div className="col-12 col-md-6 mt-120px">
            <a href="https://www.instagram.com/yo_ako/" target="_blank" className="border text-decoration-none rounded-5 d-flex align-items-center col-12 col-lg-7 p-1">
              <img src={Instagram} className="width-img-dc-green" alt="instagram" />
              <div className="ps-4">
                <small className="text-light" style={{ textDecoration: "none" }}>Instagram</small>
                <h4 className="text-light">@yo_ako</h4>
              </div>
            </a>
            <a href="https://discord.com/users/452667114126442497" target="_blank" className="border text-decoration-none rounded-5 d-flex align-items-center col-12 col-lg-7 mt-3 p-1">
              <img src={discord} className="width-img-ig-green" alt="discord" />
              <div className="ps-3">
                <small className="text-light">Discord</small>
                <h4 className="text-light">@yoako_</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;