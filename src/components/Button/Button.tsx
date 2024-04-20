import './style.scss'



const Button = ({label,className}:{label:string,className:string}) => {


  return (
    <button className={`btn ${className}`}>
      {label}
    </button>
  )
}

export default Button
