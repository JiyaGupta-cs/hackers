import React from 'react'
import footerlogo from './images/footer_logo.png'
const Footer = () => {
  return (
    <div>
  
<footer
  class="bg-black text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
  
  <div class="mx-6 sm:mx-56 py-10 text-center md:text-left">
    <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    
      
      <div class="">
        <h6
          class="text-white text-xl mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Explore
        </h6>
        <p class="mb-4">
          <a href="#!" class="text-white"
            >KIET Group of Institutions</a>
        </p>
        <p class="mb-4">
          <a href="#!" class="text-white"
            >About Us</a>
        </p>
        <p class="mb-4">
          <a href="#!" class="text-white"
            >Join Us</a>
        </p>
      </div>

      <div class="">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          ‎ 
        </h6>
        <p class="mb-4">
          <a href="#!" class="text-white"
            >Chapter Guidelines</a>
        </p>
        <p class="mb-4">
          <a href="#!" class="text-white"
            >Meet the team</a          >
        </p>
        <p class="mb-4">
          <a href="#!" class="text-white"
            >FAQs</a          >
        </p>
        
      </div>
    
      
      <div class="">
        <h6
          class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          ‎
        </h6>
        <p className='text-white'>
        Write to us at: abc@gmail.com
        </p>
      </div>
    </div>
  </div>

  <div class="bg-black p-6 text-center dark:bg-neutral-700 flex flex-col sm:flex-row sm:justify-around items-center gap-6">
    <img src={footerlogo} alt="" className='w-[70vw] sm:w-[20vw]' />
    <span className='text-white'>© Copyright 2023 Technocrats - Developed by Technocrats</span>    
  </div>
</footer>
    </div>
  )
}

export default Footer
