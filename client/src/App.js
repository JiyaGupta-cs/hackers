import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Team from './pages/Team';
import Home from './pages/Home';
import Registration from './pages/Registration';
import EventSection from './pages/Event';
import About from './pages/About';
import Footer from './pages/Footer';

import Navbar from './pages/Navbar';
const App = () => {
  return (
    <div className='app'>
         <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/event' element={<EventSection/>}/>
        <Route path='/about' element={<About/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App