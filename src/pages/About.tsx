import img from '../assets/images/_MG_5346.jpg'
import PaperLinks from '../components/PaperLinks/PaperLinks'
import { FaWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const items = [
  {icon:<FaWhatsapp/>, link:"https://wa.me/+212649869896"},
  {icon:<FaSquareXTwitter/>, link:"https://twitter.com/MohammedMahi012"},
  {icon:<FaLinkedin/>, link:"https://www.linkedin.com/in/mohammed-mahi-96954828b/"},
  {icon:<FaInstagram/>, link:"https://www.instagram.com/_mahi_mohamed/?igsh=MXFuaHA4ZXNuZ3lqdw%3D%3D"},
]

const About = () => {
  return (
    <div className="main-page about">
      <p className='paragraphe'>
      Welcome! I'm Mohammed Mahi, a full-stack web developer proficient in React.js and Laravel. With a keen eye for detail and a commitment to excellence, I specialize in crafting intuitive user interfaces and efficient backend solutions. My journey in development has been guided by agile methodologies, ensuring flexibility and responsiveness in every project I undertake.
      </p>
      <img src={img} className='img-about'/>
      <p className='paragraphe'>
      Driven by a passion for innovation, I leverage my expertise in Git platforms like GitHub and GitLab to facilitate seamless collaboration and version control. Beyond coding, I'm dedicated to continuous learning, staying abreast of the latest trends and technologies to deliver cutting-edge solutions. Let's join forces and bring your digital vision to life!
      </p>
      <PaperLinks items={items}/>
    </div>
  )
}

export default About
