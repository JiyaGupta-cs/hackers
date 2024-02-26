import React from 'react';
import HomeBg from './images/HomeBg.png';
import Footer from './Footer';
// import Carousel from './Carousal';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
// import EventSection from './Event';


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='team' style={{ backgroundColor: 'black' }}>
        <div className='flex flex-col md:flex-row justify-center items-center
         px-4 md:px-0'>
          <img className='pic2 w-full md:w-auto md:max-w-1/2' src={HomeBg} alt="KIET Chapter" />
          <div className='flex flex-col justify-center md:ml-8 mt-4 md:mt-0'>
            <h1 className="heading  text-white md:mr-32 text-7xl md:text-7xl font-bold flex items-center">
              <span className='text-red-600 mr-2'>KIET</span>
              <span className='text-white'>CHAPTER</span>
            </h1>
            <p className="text-white text-2xl ml-14 md:text-2xl md:ml-20">
              Remember: Protection is the Goal
            </p>
            <div className="btn flex justify-center pt-5 md:mt-0">
              <Link to="/registration">
                <button className="btn-1 bg-red-600 text-white text-lg md:mr-16 px-12 py-3 rounded-xl">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
       <About/>
       {/* <EventSection/>
       
        <Carousel/> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
