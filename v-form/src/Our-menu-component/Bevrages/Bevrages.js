import React from 'react'
import { NavLink } from 'react-router-dom';
import OurmenuNavbar from '../OurmenuNavbar'
import SimpleImageSlider from "react-simple-image-slider";
import Footer from '../../Footer';
import './beverages.css';
const Bevrages= () => {
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
           <NavLink className={"containermenu"}to={"/bevrages"}>Bevrages</NavLink>
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
      <h1 className='menu'>BAVERAGES</h1>
    </div>
    {/* firsthalf */}
    <div className='displayflex3'>
        <div className='bevraggescontainer'>
            <div className='bevragesimage'>
             <img src="https://www.dominos.co.in/files/items/pepsi.png" alt="" />

             <div className='bevragesname'>
            <p className='pepsi'>PEPSI (5000)</p>
            </div>

        <div>
        <a className='bevragesordernow' href="/error"> ORDER NOW</a>
        </div>

             </div>
        </div>

        {/* 2nd */}
        <div className='bevraggescontainer'>
            <div className='bevragesimage'>
             <img src="https://www.dominos.co.in/files/items/7up.png" alt="" />

             <div className='bevragesname'>
            <p className='pepsi'> 7UP (5000)</p>
            </div>

        <div>
        <a className='bevragesordernow' href="/error"> ORDER NOW</a>
        </div>

             </div>
        </div>
        {/* 3rd */}
        <div className='bevraggescontainer'>
            <div className='bevragesimage'>
             <img src="https://www.dominos.co.in/files/items/lipton.png" alt="" />

             <div className='bevragesname'>
            <p className='pepsi'>LIPTON ICE TEA(5000)</p>
            </div>

        <div>
        <a className='bevragesordernow' href="/error"> ORDER NOW</a>
        </div>

             </div>
        </div>
        {/* end here */}
       
    </div>

    {/* second half*/}
    <div className='displayflex3'>
        <div className='bevraggescontainer'>
            <div className='bevragesimage'>
             <img src="https://www.dominos.co.in/files/items/mirinda.png" alt="" />

             <div className='bevragesname'>
            <p className='pepsi'> MIRINDA (5000)</p>
            </div>

        <div>
        <a className='bevragesordernow' href="/error"> ORDER NOW</a>
        </div>

             </div>
        </div>

        {/* 2nd */}
        <div className='bevraggescontainer'>
            <div className='bevragesimage'>
             <img className='blackpepsipic' src="https://www.dominos.co.in/files/items/pepsi_black.png" alt="" />

             <div className='bevragesname'>
            <p className='pepsi'>BLACK PEPSI CAN (5000)</p>
            </div>

        <div>
        <a className='bevragesordernow' href="/error"> ORDER NOW</a>
        </div>

             </div>
        </div>
        {/* 3rd */}
        <div className='bevraggescontainer'>
            <div className='bevragesimage'>
             <img className='fantapic'  src="https://5.imimg.com/data5/VX/DB/MY-78126933/fanta-soft-drinks-500x500.jpg" alt="" />

             <div className='bevragesname'>
            <p className='pepsi'>FANTA CAN (5000)</p>
            </div>

        <div>
        <a className='bevragesordernow' href="/error"> ORDER NOW</a>
        </div>

             </div>
        </div>
        {/* end here */}
       
    </div>
    <div className="container2" >
           <NavLink className="containermenu" to={"/"}>Home</NavLink>
        </div>

    <Footer/>
    </div>
  )
}
 export default Bevrages;