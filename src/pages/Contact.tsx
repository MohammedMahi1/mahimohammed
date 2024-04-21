import Button from "../components/Button/Button"
import FieldForm from "../components/FieldForm/FieldForm"

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';


const Contact = () => {

  // const form = React.MutableRefObject<null>;


  // const sendEmail = (e:any) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_9qh0meh', 'template_xp8z65n', form.current, {
  //       publicKey: 'muCl8D333I8eTAZ1L',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };



  return (
    <div className="main-page contact">
      <h1>Contact me</h1>
      <br />
        <form className="contact-container" >
        <div className="group-form">
        <FieldForm  type="text" label="Enter your name" />
        <FieldForm  type="email" label="Enter your email" />
        </div>
        <FieldForm  type="textarea" label="Lets make somthing cool !!!" rows={5}/>
        <Button className="btn-outlined btn-fill" label="Send it"/>
        </form>
        </div>
  )
}

export default Contact
