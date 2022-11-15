import React from 'react'
import { NavLink } from 'react-router-dom'
import OurmenuNavbar from '../OurmenuNavbar'
import SimpleImageSlider from "react-simple-image-slider";
import './vegpizza.css';
import Footer from '../../Footer';
const VegPizza = () => {
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
           <NavLink className={"containermenu"}to={"/vegpizza"}>VegPizza</NavLink>
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
      <h1 className='menu'> Veg Pizza</h1>
    </div>
    {/* frist hal menu of veg pizza */}
  <div className='displayflex'>
    <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/Margherit.jpg" alt="MARGHITERTA" />
      </div>
      <div className='pizzanames'>
        <h1>Margherita </h1>
      </div>
     <span className="">
      <p className='discription1'>A hugely popular margherita, with a deliciously tangy single cheese topping</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>
{/* //2// */}
    <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg" alt="DOUBELE CHEESE MARGHERITA" />
      </div>
      <div className='pizzanames'>
        <h1> DOUBLE CHEESE Margherita </h1>
      </div>
     <span className=''>
      <p className='discription1'>The ever-popular Margherita - loaded with extra cheese... oodies of it!

</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>
     {/* 3// */}
    
   <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/Peppy_Paneer.jpg" alt="" />
      </div>
      <div className='pizzanames'>
        <h1>Margherita Pizza</h1>
      </div>      
     <span className=''>
      <p className='discription1'>Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!

      </p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>

  </div>

        {/* 2ND ROW */}
        
        <div className='displayflex'>
    <div className='background-Red1' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/Corn_&_Cheese.jpg" alt='' />
      </div>
      <div className='pizzanames'>
        <h1>CHEESE N CORN </h1>
      </div>
     <span className="">
      <p className='discription1'>Cheese I Golden Corn | Cheese n Corn Pizza</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>
    {/* //2// */}
    <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/Fresh_Veggie.jpg" alt='' />
      </div>
      <div className='pizzanames'>
        <h1>  FRESH VEGGIES </h1>
      </div>
     <span className=''>
      <p className='discription1'>
        Onion & capsicum
      </p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


      </div>
     {/* 3// */}
    
      <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg" alt='' />
      </div>
      <div className='pizzanames'>
        <h1>VEGGIE PARADISE</h1>
      </div>      
     <span className=''>
      <p className='discription1'>Goldern Corn, Black Olives, Capsicum & Red Paprika
      </p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>
    <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg" alt='' />
      </div>
      <div className='pizzanames'>
        <h1>VEGGIE PARADISE</h1>
      </div>      
     <span className=''>
      <p className='discription1'>Goldern Corn, Black Olives, Capsicum & Red Paprika
      </p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


     </div>
      

     </div>
      {/* 3rd row */}

      <div className='displayflex'>
       <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/Deluxe_Veggie.jpg" alt="MARGHITERTA" />
      </div>
      <div className='pizzanames'>
        <h1>DELULEX VEGGIE</h1>
      </div>
     <span className="">
      <p className='discription1'>For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


     </div>

{/* 2ND */}
<div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg" alt="MARGHITERTA" />
      </div>
      <div className='pizzanames'>
        <h1>MEXCIAN GREEN WAVE</h1>
      </div>
     <span className="">
      <p className='discription1'>A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


     </div>
{/* 3rd */}
<div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/Farmhouse.jpg" alt="MARGHITERTA" />
      </div>
      <div className='pizzanames'>
        <h1>FARMHOUSE </h1>
      </div>
     <span className="">
      <p className='discription1'>A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


     </div>

     
     </div>
     <div className="container2" >
           <NavLink className="containermenu" to={"/"}>Home</NavLink>
        </div>
<Footer/>
  </div>
  )
}

export default VegPizza
