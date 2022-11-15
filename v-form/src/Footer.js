import React from 'react'
import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <div  className='footer1'>
      <footer >
           <NavLink  className="navlink-3" to={"/menu"}>Menu</NavLink> 
           <NavLink className="navlink-3" to={"/about"}>About</NavLink> 
           <NavLink className="navlink-3" to={"/help"}>Help</NavLink> 
           <NavLink className="navlink-3" to={"/contact"}>Contact</NavLink> 
           <NavLink className="navlink-3"  to={"/error"}>Social media</NavLink> 
          
      </footer>
      </div>

      <footer>
        <div className='footer2'>
            <p className='copyright'>All Rights Reserved. Copyright © Ashish Kaintura Ltd.</p>
        </div>
      </footer>
      <footer className='footer3'>
      All rights reserved. Copyright © Ashish Kaintura Ltd. Disclaimer | T&C | Privacy Policy

      </footer>
    </div>
  )
}

export default Footer
