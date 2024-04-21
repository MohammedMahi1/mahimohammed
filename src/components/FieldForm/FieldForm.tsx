import './style.scss'

interface FormProps{
    type: string;
    label: string;
    rows?: number;
}

const FieldForm = ({type,label,rows}:FormProps) => {
  return (
    <>
        {
            type === 'text' || type === "email"?
            <input type={type} className="form-control" placeholder={label+" *"}/>
            :
            <textarea className='area-control' rows={rows} placeholder={label}/>
        }
    </>
  )
}

export default FieldForm
