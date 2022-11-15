import { NavLink } from 'react-router-dom';
import React from 'react';
import './App.css';
import './nav.css';
function NavBar(){
    return(
        <div className='bar-1'>
            <nav className='nav'>
            <img className='pizzalogo' src="pizzalogo.png" alt="" />
            <ul className='navbar'>
            <li><NavLink className="nav-bar-link"to={"/menu"} >Our Menu</NavLink></li>
             <li><NavLink className="nav-bar-link" to={"/About"} >About</NavLink></li>
             <li><NavLink className="nav-bar-link" to={"/help"} >Help</NavLink></li>
             <li><NavLink className="nav-bar-link" to={"/Contact"} >Contact US</NavLink></li>
             </ul>
             <div className='btn'>
              <NavLink className="LRbtn"to={"/login"}><button className="lrbtn">LOGIN </button></NavLink>
              <NavLink className="LRbtn" to={"/registration"} ><button className="lrbtn">REGISTRATION</button></NavLink>
             </div>
            
           
             </nav>
          
        </div>
    )

}

export default NavBar;