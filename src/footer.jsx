import {React  } from "react";
import { BiHome } from "react-icons/bi";
import { FaHouse,FaAlignJustify,FaList ,FaRegBell,FaUserLarge  } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
function Footer(params) {
    return(
        <>
        <nav className='foot'>
        <li><a href=""><div><FaHouse /></div> Home</a></li>
        <li><a href=""><div><FaList /></div>Categories</a></li>
        <li><a href=""><div><FaUserLarge /></div>Account</a></li>
        <li><a href=""><div><FaRegBell /></div>Notifications</a></li>
        <li><a href=""><div><HiOutlineShoppingBag /></div>Orders</a></li>
        </nav>
      
        </>

    )
}
export default Footer;