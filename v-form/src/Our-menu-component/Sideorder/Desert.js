import React from 'react'
import { NavLink } from 'react-router-dom'
import SimpleImageSlider from "react-simple-image-slider";
import OurmenuNavbar from '../OurmenuNavbar';
import Footer from '../../Footer'
import'./bread.css'

const Desert = () => {
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

        <div className='breadheadline'>
        <h1>DESERTS</h1>
      </div>

    <div className='breaddisplayflex'>
     <div className='breadicon'>
        <img className='breadimg' src="https://www.dominos.co.in/files/items/170046_BMC_image_for_Website_272X272.jpg" alt="" />
        <div className='breadname'>
       <h1>BUTTERSCOTCH MOUSSE CAKE</h1>
       <p className='breaddiscription' >A Creamy & Chocolaty indulgence with layers of rich, fluffy Butterscotch Cream and delicious Dark Chocolate Cake, topped with crunchy Dark Chocolate morsels - for a perfect dessert treat</p>
      </div>
      <div >
      <a  href="/error"><input  className='breadorderbtn' type="button" value="ORDER NOW" /></a>
      </div>
      </div>
      {/* // */}


      <div className='breadicon'>
        <img className='breadimg' src="https://www.dominos.co.in/files/items/CAKE03.jpg" alt="" />
        <div className='breadname'>
       <h1>RED VELVET LAVA CAKE</h1>
       <p className='breaddiscription' >A truly indulgent experience with sweet and rich red velvet cake on a creamy cheese flavoured base to give a burst of flavour in</p>
      </div>
      <div >
      <a  href="/error"><input  className='breadorderbtn' type="button" value="ORDER NOW" /></a>
      </div>
    </div>


    
    {/* 2nd */}


     </div>
     <div className='breaddisplayflex'>
      <div className='breadicon'>
        <img className='breadimg' src="https://www.dominos.co.in/files/items/choco-lava-cake-771.jpg" alt="" />
        <div className='breadname'>
       <h1>LAVA CAKE</h1>
       <p className='breaddiscription' >Filled with delecious molten chocolate inside.</p>
      </div>
      <div >
      <a  href="/error"><input  className='breadorderbtn' type="button" value="ORDER NOW" /></a>
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

export default Desert;
