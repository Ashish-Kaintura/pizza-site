import React from 'react'
import { BrowserRouter, Routes,Route  } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Help from './Help'
import About from './About'
import NavBar from './NavBar'
import Menu from './Menu'
import Error from './Error'
import VegPizza from './Our-menu-component/VegPizza/VegPizza'
import NonVegPizza from './Our-menu-component/VegPizza/NonVegPizza'
import Bevrages from './Our-menu-component/Bevrages/Bevrages'
import Pasta from './Our-menu-component/Pasta/Pasta'
import VegPasta from './Our-menu-component/Pasta/VegPasta'
import Nonvegpasta from './Our-menu-component/Pasta/Nonvegpasta'
import Sideorder from './Our-menu-component/Sideorder/Sideorder'
import Desert from './Our-menu-component/Sideorder/Desert'
import Dips from './Our-menu-component/Sideorder/Dips'
import Chickenwings from './Our-menu-component/ChickenWings/Chickenwings'
import Registration from './Registration'
import Contact from './Contact'



  
function App (){

  return ( 

  <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
       <Route path="/contact" element={<Contact/>} />
      <Route path="/help" element={<Help/>} />
      <Route path="/About" element={<About />} />
      <Route path="/vegpizza" element={<VegPizza />} />
      <Route path="/bevrages" element={<Bevrages/>} />
      <Route path="/nonvegpizza" element={<NonVegPizza/>} />
      <Route path="/pasta" element={<Pasta/>}/>
      <Route path="/nonvegpasta" element={<Nonvegpasta/>} />
      <Route path="/desert" element={<Desert/>} />
      <Route path="/dips" element={<Dips/>} />
      <Route path="/chickenwings" element={<Chickenwings/>} />
      <Route path="/sideorder" element={<Sideorder/>} />
      <Route path="/vegpasta" element={<VegPasta/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/error" element={<Error/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
