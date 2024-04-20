import { ReactElement } from 'react'
import './style.scss'

interface ButtonProps {
  label:string,
  className:string,
  icon?:ReactElement,
}

const Button = ({label,className,icon}:ButtonProps) => {


  return (
    <button className={`btn ${className}`}>
      {label}{icon}
    </button>
  )
}

export default Button
