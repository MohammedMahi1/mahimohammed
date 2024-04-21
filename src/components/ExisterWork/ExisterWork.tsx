import './style.scss'


interface WorkProps{
    exists?: boolean;
}

const ExisterWork = ({exists}:WorkProps) => {

  return (
    <div>
        {
            exists ?'':
                <p className='not-exist'>Still work on it...</p>
        }
    </div>
  )
}

export default ExisterWork
