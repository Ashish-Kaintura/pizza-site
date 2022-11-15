import React from 'react'
import { NavLink } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import Footer from '../../Footer';
import OurmenuNavbar from '../OurmenuNavbar';
import Bread from './Bread';
const Sideorder= () => {
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
           <NavLink className={"containermenu"}to={"/sideorder"}>Sideorder</NavLink>
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
      <h1 className='menu'>SIDE ORDER</h1>
    </div>
    <br />
    <div className='veg-non-veg-pasta'>
    <NavLink  className=" veg-non-veg-pasta-link" to={"/sideorder"}>Bread</NavLink>
    <NavLink  className=" veg-non-veg-pasta-link" to={"/desert"}>Desserts</NavLink>
    <NavLink className=" veg-non-veg-pasta-link" to={"/dips"}>Dips</NavLink>
    <NavLink className=" veg-non-veg-pasta-link" to={"/bevrages"}>BEVRAGES</NavLink>
      </div>
   
    <div className="container2" >
           <NavLink className="containermenu" to={"/"}>Home</NavLink>
        </div>
      <Bread/>
      <div className="container2" >
           <NavLink className="containermenu" to={"/menu"}>Menu</NavLink>
        </div>
    <Footer/>
    </div>
  )
}
export default Sideorder;