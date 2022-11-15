import React from 'react'
import './homeheader.css';
import { NavLink } from 'react-router-dom';
import GiftcardHeader from './GiftcardHeader';
import Footer from './Footer';
function HomeHeader ()  {

  return (
    <div>
        <div className='header'>
            <h1>Wellcome To Pizza Time</h1>
        </div>
        <div className='template'>
            <div className='content'>
            <h1>Online ordering</h1>
            <p className='p1'>Yummy pizza delivered fast & fresh</p>
            <br />
           <a href="/error"> <button className=' order'>Order Now</button></a>
            </div>
            <div className='pizzaiconcenter'>
          <img className='pizzaicon' src="pizza icon.png" alt="" />
          </div>
        </div>
        <div className="container2" >
           <NavLink className="containermenu" to={"/"}>Home</NavLink>
        </div>
        <br />
        <GiftcardHeader/>
        <Footer/>
    </div>
  )
}

export default HomeHeader;
