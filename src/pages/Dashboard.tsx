
import mahi from '../assets/images/Ellipse 2.png'
import Button from '../components/Button/Button'
import ToolTip from '../components/ToolTip/ToolTip'
import { MdOutlineFileDownload } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import CV from "../assets/MohammedMahiCV.pdf" 
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (

    <div className="page-container main-page">
      <div className='typographie'>
        <h1>Hello !</h1>
        <h1>I'm</h1>
        <h1>Mohammed</h1>
        <p className='description'>
        A full stack web developer I specialize in web development using <a href="https://legacy.reactjs.org/docs/getting-started.html" style={{textDecoration:"none",color:"#ffffff"}} target='_blank'><b><u>#React JS</u></b> </a>for responsive front-end interfaces and on the backend I work on <a href="https://laravel.com/docs/11.x/installation" style={{textDecoration:"none",color:"#ffffff"}} target='_blank'><b><u>#Laravel.</u></b></a>
        </p>
      </div>
      <div className='group-btn'>
        <a href={CV} download="Mohammed Mahi" className='link'>
          <Button label='Download CV' className='btn-outlined' icon={<MdOutlineFileDownload />} />
        </a>
        <Link to="/mahimohammed/contact" className='link'>
        <Button label='Contact me' className='btn-contained' icon={<TbSend />} />
        </Link>
      </div>
      <div className='content-column'>
        <img src={mahi} className="img-dashboard" />
        <ToolTip />
      </div>

    </div>

  )
}

export default Dashboard
