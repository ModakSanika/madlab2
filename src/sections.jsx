import  React  from "react"
import {useNavigate} from "react-router-dom";
import { Smart } from "./Smart";
function Sections(){
    const navigate = useNavigate()
    const gotonavigate = ()=>{
       navigate( '/App')
    // alert('Hello sanika')
    }
    const gnavigate=()=>{
        navigate( '/Smart')
    }
    return(
        <>
        <div className='sec-btn'>
        <button onClick={()=>gotonavigate()} className='jio-mart'>JioMart</button>
         <button onClick={()=>gnavigate()} className='smart'> SMART BAZAR </button>
        </div>
        
        </>
    )

}
export default Sections;