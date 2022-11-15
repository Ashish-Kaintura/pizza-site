import React from 'react'
import { NavLink } from 'react-router-dom'
import './ourmenunavbar.css';
const OurmenuNavbar = () => {
  return (
    <div>
      <div className='bar-2'>
            <nav className='nav1'>
            <ul className='navmenubar'>
            <li><NavLink className="nav-bar-link1"  to={"/vegpizza"} >VEG PIZZA</NavLink></li>
            <li><NavLink className="nav-bar-link1"  to={"/nonvegpizza"} >Non-VEG PIZZA</NavLink></li>
            <li><NavLink className="nav-bar-link1"  to={"/bevrages"} >BEVRAGES</NavLink></li>
            <li><NavLink className="nav-bar-link1"  to={"/pasta"} >PASTA</NavLink></li>
            <li><NavLink className="nav-bar-link1"  to={"/sideorder"} >SIDE ORDER</NavLink></li>
            <li><NavLink className="nav-bar-link1"  to={"/chickenwings"} >CHICKEN WINGS</NavLink></li>

             </ul>
             </nav>
          </div>
    </div>
  )
}

export default OurmenuNavbar
