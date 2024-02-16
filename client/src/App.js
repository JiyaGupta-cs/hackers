import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Team from './pages/Team';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='app'>
         <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/team' element={<Team/>} />
        
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App