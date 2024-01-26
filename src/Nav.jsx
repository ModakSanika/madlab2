import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaEllipsis,FaAlignJustify ,FaAngleLeft, FaMagnifyingGlass} from "react-icons/fa6";
function Nav() {
  return (
    <>

      <div className='nav-bar' >
        <li className='angle-left'><a href=""><FaAngleLeft />
</a></li>
        <li className='lines'><a href=""><FaAlignJustify /></a> </li>
        <input className="search-bar" type ='search' placeholder='Search'/> <button className='glass'><FaMagnifyingGlass /></button>  
        
        <li className="cart"><a href=""><FaCartShopping /></a>
          
        </li>
      </div>
    </>
  );
}
export default Nav;

