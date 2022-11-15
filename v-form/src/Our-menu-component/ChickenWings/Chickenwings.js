import React from "react";
import { NavLink } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from '../../Footer';
import OurmenuNavbar from '../OurmenuNavbar';
const Chickenwings= () => {
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
           <NavLink className={"containermenu"}to={"/chickenwings"}>ChickenWings</NavLink>
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

    
       
   
    <div className="container2" >
           <NavLink className="containermenu" to={"/"}>Home</NavLink>
        </div>
      
        
        <div className='breadheadline'>
        <h1>CHICKENWINGS</h1>
      </div>

    <div className='breaddisplayflex'>
     <div className='breadicon'>
        <img className='breadimg' src="https://www.dominos.co.in/files/items/Roasted-chicken-192x192.png" alt="" />
        <div className='breadname'>
       <h1>ROASTED CHICKEN WINGS PERI-PERI</h1>
      </div>
      <div >
      <a  href="/error"><input  className='breadorderbtn' type="button" value="ORDER NOW" /></a>
      </div>
      </div>
      {/* // */}


      <div className='breadicon'>
        <img className='breadimg' src="https://www.dominos.co.in/files/items/Roasted-chicken-192x192.png" alt="" />
        <div className='breadname'>
       <h1>ROASTED CHICKEN WINGS CLASSIC HOT SAUCE</h1>
       
      </div>
      <div >
      <a  href="/error"><input  className='breadorderbtn' type="button" value="ORDER NOW" /></a>
      </div>
    </div>


    <div className='breadicon'>
        <img className='breadimg' src="https://www.dominos.co.in/files/items/Chicken-Meat-balls-192x192.png" alt="" />
        <div className='breadname'>
       <h1>CHICKEN MEATBALLS PERI-PERI</h1>
      </div>
      <div >
      <a  href="/error"><input  className='breadorderbtn' type="button" value="ORDER NOW" /></a>
      </div>
     </div>


     </div>
      <div className='breadicon'>
        <img className='breadimg' src="https://www.dominos.co.in/files/items/Boneless-Chicken-wings-192x192.png" alt="" />
        <div className='breadname'>
       <h1>BONELESS CHICKEN WINGS PERI-PERI</h1>
      </div>
      <div >
      <a  href="/error"><input  className='breadorderbtn' type="button" value="ORDER NOW" /></a>
      </div>
     </div>
     

      <div className="container2" >
           <NavLink className="containermenu" to={"/menu"}>Menu</NavLink>
        </div>

        
    <Footer/>
    </div>
  )
}
export default Chickenwings;