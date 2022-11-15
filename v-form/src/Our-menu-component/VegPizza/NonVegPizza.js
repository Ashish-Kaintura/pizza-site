import React from 'react'
import { NavLink } from 'react-router-dom';
import OurmenuNavbar from '../OurmenuNavbar'
import SimpleImageSlider from "react-simple-image-slider";
import Footer from '../../Footer';
//SAME CSS AS VEG PIZZAra
const NonVegPizza = () => {
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
           <NavLink className={"containermenu"}to={"/nonvegpizza"}>NonVegPizza</NavLink>
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

            {/* firsthalf */}
            <div className='menuheader'>
      <h1 className='menu'> NON-Veg Pizza</h1>
    </div>
    
    {/* frist hal menu of nonveg pizza */}
  <div className='displayflex'>
    <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/MicrosoftTeams-image_(14).png" alt="MARGHITERTA" />
      </div>
      <div className='pizzanames'>
        <h1>CHICKEN GOLDEN DELIGHT</h1>
      </div>
     <span className="">
      <p className='discription1'>Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>
{/* //2// */}
    <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/MicrosoftTeams-image_(13).png" alt="DOUBELE CHEESE MARGHERITA" />
      </div>
      <div className='pizzanames'>
        <h1>NON VEG SUPREME</h1>
      </div>
     <span className=''>
      <p className='discription1'>Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers
</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>
     {/* 3// */}
    
   <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/MicrosoftTeams-image_(11).png" alt="" />
      </div>
      <div className='pizzanames'>
        <h1>CHICKEN DOMINATOR</h1>
      </div>      
     <span className=''>
      <p className='discription1'>Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers
      </p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>

  </div>
{/* second */}
<div className='displayflex'>
    <div className='background-Red1' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/Pepper_Barbeque_&_Onion.jpg" alt="MARGHITERTA" />
      </div>
      <div className='pizzanames'>
        <h1>PEPPER BARBECUE & ONION</h1>
      </div>
     <span className="">
      <p className='discription1'>Pepper Barbecue Chicken I Onion</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>
{/* //2// */}
    <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/MicrosoftTeams-image_(15).png" alt="DOUBELE CHEESE MARGHERITA" />
      </div>
      <div className='pizzanames'>
        <h1> PEPPER BARBECUE CHICKEN</h1>
      </div>
     <span className=''>
      <p className='discription1'>Pepper Barbecue Chicken I Cheese

</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>
     {/* 3// */}
    
   <div className='background-Red' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/MicrosoftTeams-image_(17).png" alt="" />
      </div>
      <div className='pizzanames'>
        <h1>CHICKEN SAUSAGE</h1>
      </div>      
     <span className=''>
      <p className='discription1'>Chicken Sausage & Cheese

      </p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>
    {/* 4TH */}
    <div className='background-Red1' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/MicrosoftTeams-image_(17).png" alt="" />
      </div>
      <div className='pizzanames'>
        <h1>CHICKEN SAUSAGE</h1>
      </div>      
     <span className=''>
      <p className='discription1'>Chicken Sausage & Cheese

      </p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>

  </div>
{/* 3rd */}

<div className='displayflex'>
    <div className='background-Red1' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/MicrosoftTeams-image_(10).png" alt="MARGHITERTA" />
      </div>
      <div className='pizzanames'>
        <h1>CHICKEN FIESTA</h1>
      </div>
     <span className="">
      <p className='discription1'>Grilled Chicken Rashers I Peri-Peri Chicken I Onion I Capsicum</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>
{/* //2// */}
    <div className='background-Red1' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/MicrosoftTeams-image_(18).png" alt="DOUBELE CHEESE MARGHERITA" />
      </div>
      <div className='pizzanames'>
        <h1>INDI CHICKEN TIKKA</h1>
      </div>
     <span className=''>
      <p className='discription1'>The wholesome flavour of tandoori masala with Chicken tikka I onion I red paprika I mint mayo
</p>
     </span>
     <div className='ordernow-btn'>
      <a href="/error"><input className='OrderNow-Btn' type="button" value="ORDER NOW" /></a>
     </div>


    </div>
     {/* 3// */}
    
   <div className='background-Red1' >
      <div className='vegpizzaicon'>
        <img className='vegpizza-icon' src="https://www.dominos.co.in/files/items/MicrosoftTeams-image_(20).png" alt="" />
      </div>
      <div className='pizzanames'>
        <h1>CHICKEN PEPPERONI</h1>
      </div>      
     <span className=''>
      <p className='discription1'>A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese

      </p>
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

    {/* last div */}</div>
  )
}

export default NonVegPizza
