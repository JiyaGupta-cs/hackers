import React from 'react'
import footerlogo from './images/footer_logo.png'
const Footer = () => {
  return (
    <div>
  
<footer
  class="bg-black text-center lg:text-left">
  
  <div class="mx-6 sm:mx-56 py-10 text-center md:text-left">
    <div class="grid-1 grid gap-0 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
    
      
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
        <p className='text-white gap-2 '>
        Write to us at: ‎ <a href='mailto:technocrats@kiet.edu' className='font-semibold text-white'> technocrats@kiet.edu</a>
        </p>
      </div>
    </div>
  </div>

  <div className="bg-black p-6 text-center dark:bg-neutral-700 flex flex-col sm:flex-row sm:justify-around items-center gap-6">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.893214057894!2d77.49584577474205!3d28.75260507861928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xd11ed4123c7691fe!2sKIET%20GROUP%20OF%20INSTITUTIONS%2C%20Muradnagar%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1708115942846!5m2!1sen!2sin" className='w-[90vw] h-[80vw] sm:w-[1087px] sm:h-[341px]' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
  </div>

  <div className="bg-black p-6 text-center dark:bg-neutral-700 flex flex-col sm:flex-row sm:justify-around items-center gap-6 sm:pb-10">
    <img src={footerlogo} alt="" className='w-[70vw] sm:w-[20vw]' />
    <span className='text-white'>© Copyright 2023 Technocrats - Developed by Technocrats</span>    
  </div>

</footer>
    </div>
  )
}

export default Footer
