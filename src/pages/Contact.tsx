import Button from "../components/Button/Button"
import FieldForm from "../components/FieldForm/FieldForm"

import { TbSend } from "react-icons/tb";

const Contact = () => {
  return (
    <div className="main-page contact">
      <h1>Contact me</h1>
      <br />
        <div className="contact-container">
        <div className="group-form">
        <FieldForm  type="text" label="Enter your name" />
        <FieldForm  type="email" label="Enter your email" />
        </div>
        <FieldForm  type="textarea" label="Lets make somthing cool !!!" rows={5}/>
        <Button className="btn-outlined btn-fill" label="Send it"/>
        </div>
        </div>
  )
}

export default Contact
