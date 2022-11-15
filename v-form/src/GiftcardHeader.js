import React from 'react'
import { NavLink } from 'react-router-dom';
import './giftcardheader.css';
const GiftcardHeader = () => {
  return (
    <div>
      <div className="container">
        <h1 className='gifcard'>Gift Card</h1>
      </div>
      <div className='giftcardoffer'>
        <img className='offer1' src="https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg" alt="" />
        <img className='offer1' src="https://api.dominos.co.in/prod-olo-api/images/Home_Paytm_20210519.jpg" alt="" />
        <img className='offer1' src="https://api.dominos.co.in/prod-olo-api/images/Home_airtel_30082020.jpg" alt="" />
        <img className='offer1' src="https://api.dominos.co.in/prod-olo-api/images/Home_Freecharge_20210405.jpg" alt="" />
        <img className='offer1' src="https://api.dominos.co.in/prod-olo-api/images/Dominos_Mobi_Home_20210503.jpg" alt="" />
      </div>
      <div>
        <h1 className='Explore'>Explore</h1>
      </div>
      <div className='Expore-box' >
        <a className='Explore-menu' href="/menu"> <div >
          <img className='menuicon' src="https://www.dominos.co.in/assets/menu.png" alt="" />
          <div className='ourmenu'>
            <h1>Our Menu</h1>
            <p className='context'> Explore our range of delicious Pizzas, delivered in 30 minutes!</p>
          </div>
          <a className='discovepizza' href="/menu">
            <div className='Discoverpizza'>
              <h1>DISCOVER PIZZA</h1></div>
          </a>

        </div></a>

        <a className='Explore-menu' href="/menu"> <div >
          <img className='menuicon' src="https://www.dominos.co.in/assets/birthday.png" alt="" />
          <div className='ourmenu'>
            <h1>Birthday Party</h1>
            <p class="context">Celebrate the joy of birthday with Fresh &amp; Hot pizzas // -</p>
          </div>
          <a className='discovepizza' href="/menu">
            <div className='Discoverpizza'>
              <h1>BOOK NOW</h1></div>
          </a>

        </div></a>
        <a className='Explore-menu' href="/menu"> <div >
          <img className='menuicon' src="https://www.dominos.co.in/assets/catering.png" alt="" />
          <div className='ourmenu'>
            <h1>CATERING</h1>
            <p class="context">Live Domino's Kitchen for weddings / corporate events</p>
          </div>
          <a className='discovepizza' href="/menu">
            <div className='Discoverpizza'>
              <h1>BOOK NOW</h1></div>
          </a>

        </div></a>

      </div>
       <div className='appimg'>
        <div >
          <img className='appimgicon' src="https://www.dominos.co.in/assets/new_app_img.png" alt="" />
        </div>
        <div className='app-download'>
          <h2> Unlock Exclusive Offer
            <p className='context2'>For lightning fast ordering experience download the app</p>
          </h2>
        </div>
      </div>
<div>
<div className="container2" >
           <NavLink className="containermenu" to={"/menu"}>Menu</NavLink>
        </div>
</div>

    </div>
  )
}

export default GiftcardHeader;
