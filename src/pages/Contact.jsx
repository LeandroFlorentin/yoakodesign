import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
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
    <div className='ht-100 mt-2 text-light container' ref={reference}>
      <h1 className="fw-bold">Get in touch</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <h4>Send me an E-mail</h4>
          <p>I’m always open to negotiations!</p>
          <p>If you would like to find out more about how I can help your business, or if you would like to request a private commission, please fill out this brief form, and I will be in touch shortly. </p>
          <p>Thank you!</p>
        </div>
        <form onSubmit={handleSubmit(submitForm)} className="col-12 col-md-6">
          <div>
            <Input className="form-control" type="text" register={register} name="name" required={true} />
          </div>
          <button type="submit" className="btn btn-light">Send</button>
        </form>
        <div className="col-12 col-md-6"></div>
        <div className="col-12 col-md-6"></div>
      </div>
    </div>
  )
}

export default Contact;
