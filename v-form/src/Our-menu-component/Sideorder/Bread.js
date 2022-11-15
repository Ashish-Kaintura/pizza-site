import React from 'react'
import'./bread.css'

const Bread = () => {
  return (
    <div>
      <div className='breadheadline'>
        <h1>BREAD</h1>
      </div>
    <div className='breaddisplayflex'>
      <div className='breadicon'>
        <img className='breadimg' src="https://www.dominos.co.in/files/items/garlic-bread.webp" alt="" />
        <div className='breadname'>
       <h2>GARLIC BREADSTICKS</h2>
       <p className='breaddiscription' >The endearing tang of garlic in breadstics baked to perfection.</p>
      </div>
      <div >
      <a  href="/error"><input  className='breadorderbtn' type="button" value="ORDER NOW" /></a>
      </div>
      </div>
     
     {/* // */}
     <div className='breadicon'>
        <img className='breadimg' src="https://www.dominos.co.in/files/items/BRD0031.webp" alt="" />
        <div className='breadname'>
       <h2>CHICKEN PEPPERONI STUFFED GARLIC BREAD</h2>
       <p className='breaddiscription' >Freshly Baked Garlic Bread stuffed with Delectable Chicken Pepperoni, Cheese and sprinkled with Basil Parsley</p>
      </div>
      <div >
      <a  href="/error"><input  className='breadorderbtn' type="button" value="ORDER NOW" /></a>
      </div>
      </div>
      {/* // */}


      <div className='breadicon'>
        <img className='breadimg' src="https://www.dominos.co.in/files/items/stuffed-garlic-breadstick_1346070564.webp" alt="" />
        <div className='breadname'>
       <h2>STUFFED GARLIC BREAD</h2>
       <p className='breaddiscription' >Freshly Baked Garlic Bread stuffed with mozzarella cheese, sweet corns & tangy and spicy jalapeños</p>
      </div>
      <div >
      <a  href="/error"><input  className='breadorderbtn' type="button" value="ORDER NOW" /></a>
      </div>
    </div>
    {/* 2nd */}

    
    </div>
    <div className='breaddisplayflex'>
      <div className='breadicon'>
        <img className='breadimg' src="https://www.dominos.co.in/files/items/BRD0030.webp" alt="" />
        <div className='breadname'>
       <h2>PANEER TIKKA STUFFED GARLIC BREADS</h2>
       <p className='breaddiscription' >Freshly Baked Stuffed Garlic Bread with Cheese, Onion and Paneer Tikka fillings. Comes with a dash of Basil Parsley Sprinkle</p>
      </div>
      <div >
      <a  href="/error"><input  className='breadorderbtn' type="button" value="ORDER NOW" /></a>
      </div>
      </div>
      </div>
    </div>
    
  )
}

export default Bread;
