import React from 'react'
import Footer from '../../Footer';
import './vegpasta.css';
import { NavLink } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import OurmenuNavbar from '../OurmenuNavbar';
import './pasta.css';
const Nonvegpasta = () => {
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
           /
           <NavLink className={"containermenu"}to={"/pasta"}>Pasta</NavLink>
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

        <div className='vegpastatitle'>NON VEG PASTA</div>
        
        <div className='veg-non-veg-pasta'>
    <NavLink className=" veg-non-veg-pasta-link" to={"/pasta"}>VEG PASTA</NavLink>
    <NavLink  className=" veg-non-veg-pasta-link" to={"/nonvegpasta"}>NON VEG PASTA</NavLink>
    </div>
    <div className="container2" >
           <NavLink className="containermenu" to={"/"}>Home</NavLink>
        </div>
      <div className='displayflex'>
          <div className='vegpastabackground' >
          <div className='vegpastaicon'>
            <img className='vegpasta-icon' src="https://www.dominos.co.in/files/items/MoroccanPastaVeg_N_(1).jpg" alt="MARGHITERTA" />
          </div>
          <div className='pastanames'>
        <h1>MOROCCAN SPICE PASTA VEG</h1>
             </div>
        <span className="">
       <p className='discription2'>Instant Fusilli Pasta, Harissa Sauce, Onion, Mushroom, Olives, Parsley sprinkle</p>
       </span>
      <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
        </div>
       </div>


       <div className='vegpastabackground' >
          <div className='vegpastaicon'>
            <img className='vegpasta-icon' src="https://www.dominos.co.in/files/items/PaneerTikkaMasala_N.jpg" alt="MARGHITERTA" />
          </div>
          <div className='pastanames'>
        <h1>TIKKA MASALA PASTA VEG</h1>
             </div>
        <span className="">
       <p className='discription2'>Instant Fusilli Pasta, Spicy Red dressing, Onion, Paneer Tikka, Parsley sprinkle </p>
       </span>
      <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
        </div>
       </div>


       <div className='vegpastabackground' >
          <div className='vegpastaicon'>
            <img className='vegpasta-icon' src="https://www.dominos.co.in/files/items/CreamyTomatoVeg_N_(3).jpg" alt="MARGHITERTA" />
          </div>
          <div className='pastanames'>
        <h1>CREAMY TOMATO PASTA VEG</h1>
             </div>
        <span className="">
       <p className='discription2'>Instant Fusilli Pasta, Creamy Culinary Dressing, Onion, Olive, Green Capsicum, Parsley sprinkle
</p>
       </span>
      <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
        </div>
       </div>

       
<div/>
       </div>

<Footer/>
    </div>
  )
}

export default Nonvegpasta;
