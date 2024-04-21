
import './style.scss';

interface PaperProps{
    items:Array<any>;
}
const PaperLinks = ({items}:PaperProps) => {
    console.log(items);
    
  return (
    <div className='paper'>
        {
            items.map((i)=>{
                return(
                    <a href={i.link} target='_blank' className='link-paper'>
                    {i.icon}
                    </a>
                )
            })
        }
    </div>
  )
}

export default PaperLinks
