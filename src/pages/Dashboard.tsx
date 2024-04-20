
import mahi from '../assets/images/Ellipse 2.png'
import Button from '../components/Button/Button'
import ToolTip from '../components/ToolTip/ToolTip'
const Dashboard = () => {
  return (

      <div className="page-container dashboard">
        <div className='typographie'>
          <h1>Hello !</h1>
          <h1>I'm</h1>
          <h1>Mohammed</h1>
          <h2>Full stack web developer</h2>
        </div>     
        <div className='group-btn'>
          <Button label='Download CV' className='btn-outlined'/>
          <Button label='Contact me' className='btn-contained'/>
      </div>
        <div className='content-column'>
          <img src={mahi} className="img-dashboard" />
          <ToolTip />
        </div>

      </div>

  )
}

export default Dashboard
