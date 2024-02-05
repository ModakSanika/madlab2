import React from 'react'

 const Dropdown = () => {
  return (
    <div className='dropdown'>
        <ul>
        <li>Home</li>
        <li>Shop By Category</li>
        </ul>
        <ul>
            <div>My Account</div>
            <li>My Orders </li>
            <li>My List </li>
            <li>Wishlist </li>
            <li>JioMart Wallet</li>
            <li>My  notifications </li>
        </ul>
        <ul>
            <div>Offers and More</div>
            <li>Coupon Store</li>
            <li>Offer Store</li>
        </ul>
        <ul>
            <div>Help and Support</div>
            <li>FAQ'S/Need Help</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Guide</li>
        </ul>
    </div>
  )
}
export default Dropdown