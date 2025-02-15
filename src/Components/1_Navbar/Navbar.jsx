import React, { useState } from 'react'
import './Navbar.scss'

const Navbar = () => {
  const [expand , setExpand] = useState(false);

  return (
    <nav>
      <div className="navbar_left">
        <a href='/' className='navbar_left_logo'>
            <img src="/logo.png" alt=""/>
            <span>SujathaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="navbar_right">
        <a href="" className='navbar_right_signIn' >Sign In</a>
        <a href="" className='navbar_right_signUp' >Sign Up</a>
        <div className="navbar_right_menuIcon">
            <img src="/menu.png" alt="" onClick={()=>setExpand(prev => !prev)}/>
        </div>
        <div className={expand ? "navbar_right_menu active" : "navbar_right_menu"}>
           <a href="/">Home</a>
           <a href="/">About</a>
           <a href="/">Contact</a>
           <a href="/">Agents</a>
           <a href="/">Sign In</a>
           <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
