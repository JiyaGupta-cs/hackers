import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Team from './pages/Team';
import Home from './pages/Home';
import Registration from './pages/Registration';

const App = () => {
  return (
    <div className='app'>
         <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/registration' element={<Registration/>} />
        
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App