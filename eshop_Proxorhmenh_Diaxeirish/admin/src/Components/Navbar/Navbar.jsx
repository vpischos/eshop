import React from 'react'
import navlogo from '../../assets/nav-logo.png'
import navProfile from '../../assets/nav-profile.svg'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar