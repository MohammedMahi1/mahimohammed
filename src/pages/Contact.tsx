
import Button from "../components/Button/Button"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSnackbar } from "notistack";


const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { enqueueSnackbar } = useSnackbar()
  React.useEffect(() => {
    if (form.current) {
      form.current.focus();
      console.log(form.current.focus());
      
    }
  }, [])
  const sendEmail = (e:React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9qh0meh', 'template_rr115td', form.current, {
        publicKey: 'muCl8D333I8eTAZ1L',
      })
      .then((e) => {
          enqueueSnackbar("Message send successfully",{style: {
            backgroundColor:"#14A44D",
                color:"#ffffff",
          }})
        })
  };


  return (
    <div className="main-page contact">
      <h1>Contact me</h1>
      <br />
        <form className="contact-container" ref={form} onSubmit={sendEmail}>
        <div className="group-form">
        <input type='text' className="form-control" placeholder="Enter your name"  name="user_name" required/>
        <input type='email' className="form-control" placeholder="Enter your email" name="user_email" required/>
        </div>
        <textarea className='area-control' rows={5} placeholder="Lets make somthing cool !!!" name="message" required/>
        <Button className="btn-outlined btn-fill" label="Send it"/>
        </form>
        </div>
  )
}

export default Contact
