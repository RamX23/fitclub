import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className='header'>
   <img className='logo' src={logo} alt='/'/>

   <ul className='menu'>
    <li> <a href='/'>Home</a></li>
    <li> <a href='#program'>Programs</a></li>
    <li><a href='#reason'>Why us</a></li>
    <li><a href='#plan-main'>Plans</a></li>
    <li>Testimonials</li>
   </ul>
    </div>
  )
}

export default Header
