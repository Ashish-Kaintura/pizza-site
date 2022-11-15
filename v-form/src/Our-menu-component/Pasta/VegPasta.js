import React from 'react'
import './vegpasta.css';
const VegPasta = () => {
  return (
    <div>
      <div className='vegpastatitle'>VEG PASTA</div>
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

       

       </div>


    </div>
  )
}

export default VegPasta
