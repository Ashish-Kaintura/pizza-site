import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css';
import SimpleImageSlider from "react-simple-image-slider";
import Footer from './Footer';
import OurmenuNavbar from './Our-menu-component/OurmenuNavbar'
function Menu () {
  const  images = [
    {  url: "https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg" },
    { url: "https://api.dominos.co.in/prod-olo-api/images/Home_Paytm_20210519.jpg" },
    { url: 'https://api.dominos.co.in/prod-olo-api/images/Home_airtel_30082020.jpg' },
    { url: 'https://api.dominos.co.in/prod-olo-api/images/Home_Freecharge_20210405.jpg' },
    { url: 'https://api.dominos.co.in/prod-olo-api/images/Dominos_Mobi_Home_20210503.jpg'},
    
    
  ];
  return (
    <div>
     <div>
      <OurmenuNavbar/>
     </div>
      <div className="container2" >
           <NavLink className="containermenu" to={"/"}>Home</NavLink>
           /
           <NavLink className="containermenu" to={"/menu"}>Menu</NavLink>
        </div>
        <div className='slider'>
          <div>
      <SimpleImageSlider className="simpleimageslider"
        style={{ margin:"0 auto",alignItems:"center", marginTop: '10px', backgroundRepeat:"no-repeat",backgroundSize:"cover",objectFit:"contain"}}
        width="60%"
        height="60vh"
        loop={true}
        autoPlay={true}
        images={images}
        navSize= {50}
        slideDuration={1}
        showBullets={true}
        showNavs={true}
        
      />
      </div>
    </div>
    <div className='menuheader'>
      <h1 className='menu'> The Pizza Time Menu</h1>
    </div>
   <div className='wallpaper' >
     <div className='background-red'>
     <div className='hedline'>
     <h3 className='headline-text'>VEG PIZZA</h3>
     <img className='foodiconwallpaper' src="https://www.dominos.co.in/theme2/front/images/menu-images/my-vegpizza.webp" alt=" veg pizza" />
     </div>
     <p className='discription'>
     <span > A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier</span>
     </p>
     <div className='viewall-btn'>    
      <a href="/vegpizza" ><input className='viewall' type="button" value="VIEW ALL" /></a>
      </div>
     </div>
     {/* nonveg */}
   <div className='background-red'>
   <div className='hedline'>
    <h3 className='headline-text'>NON-VEG PIZZA</h3>
    <img className='foodiconwallpaper' src="https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp" alt="non veg pizza" />
   </div>
   <p className='discription'>
    <span > Choose your favourite non-veg pizzas from the  Pizza Time menu. Get fresh non-veg pizza with your choice of crusts &amp; toppings</span>
    </p>
    <div className='viewall-btn'>    
      <a href="/nonvegpizza" ><input className='viewall' type="button" value="VIEW ALL" /></a>
      </div>
   </div>
   {/* bevrage */}
   <div className='background-red'>
   <div className='hedline'>
    <h3 className='headline-text'>SIDE &amp; BEVRAGES</h3>
    <img className='foodiconwallpaper' src="https://www.dominos.co.in/theme2/front/images/menu-images/sides_beverages.webp" alt="Bevrages" />
   </div>
   <p className='discription'>
    <span >  Complement your pizza with wide range of sides &amp; beverages available at The Pizza Time In India
      just get It</span>
    </p>
    <div className='viewall-btn'>    
      <a href="/sideorder" ><input className='viewall' type="button" value="VIEW ALL" /></a>
      </div>
   </div>
   {/* secondhlaf */}
   {/* pasta */}
   </div>
   <div className='wallpaper1' >
     <div className='background-red'>
     <div className='hedline'>
     <h3 className='headline-text'>PASTA</h3>
     <img className='pastawallpaper' src="https://www.dominos.co.in/theme2/front/images/menu-images/pasta_new.webp" alt=" pasta" />
     </div>
     <p className='discription'>
     <span > A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier</span>
     </p>
     <div className='viewall-btn'>    
      <a href="/pasta" ><input className='viewall' type="button" value="VIEW ALL" /></a>
      </div>
     </div>
  </div>
  <div className="container2" >
           <NavLink className="containermenu" to={"/menu"}>Menu</NavLink>
        </div>
    <Footer/>    
  </div>
  )
}

export default Menu
;