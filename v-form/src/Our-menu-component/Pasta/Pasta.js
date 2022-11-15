import React from 'react'
import { NavLink } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import Footer from '../../Footer';
import OurmenuNavbar from '../OurmenuNavbar';
import './pasta.css';
import VegPasta from './VegPasta';
const Pasta= () => {
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
        {/* /// */}
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
      <h1 className='menu'>PASTA</h1>
    </div>
    <br />
    <div className='veg-non-veg-pasta'>
    <NavLink className=" veg-non-veg-pasta-link" to={"/vegpasta"}>VEG PASTA</NavLink>
    <NavLink  className=" veg-non-veg-pasta-link" to={"/nonvegpasta"}>NON VEG PASTA</NavLink>
    </div>
   
    <div className="container2" >
           <NavLink className="containermenu" to={"/"}>Home</NavLink>
        </div>
        <VegPasta/>
    <Footer/>
    </div>
  )
}
 export default Pasta;