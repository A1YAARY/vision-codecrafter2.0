import React from 'react'

function LandingNavbar() {
  return (
    <nav class=" top-0 border-solid border-[#10002B] w-full border-b py-3 bg-[#10002B] z-50 ">
<div class="container mx-auto ">
  <div class="w-full flex  flex-col lg:flex-row">
      <div class=" flex justify-between  lg:flex-row">
         
          
      </div>
      <div class="hidden w-full lg:flex lg:pl-11 " id="navbar-default-example">
          <ul class="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4 ">
              <li>
                  <a href="javascript:;"
                      class="flex items-center justify-between text-[#c77dff] text-2xl  hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Home</a>
              </li>
              <li>
                  <a href="javascript:;"
                      class="flex items-center justify-between text-[#c77dff]  text-2xl  hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Features
                      </a>
              </li>
              
              <li>
                  <a href="javascript:;"
                      class="flex items-center justify-between text-[#c77dff] text-2xl  hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">About Us</a>
              </li>
          </ul>
      </div>
  </div>
</div>
</nav>
                                                  
  )
}

export default LandingNavbar