import React from 'react'
import { UilFacebook,UilInstagram,UilLinkedin,UilPhone,UilMobileAndroid,UilEnvelopeMinus,UilMapMarker} from '@iconscout/react-unicons'

export default function Footer() {
  return (
    <div>
      {/* <!-- Footer container --> */}
<footer
  class=  "bg-fixed object-cover h-full lg:h-96 bg-cover bg-darkness/75 " style={{"background-image": "url(https://cache.careers360.mobi/images/frontend/desktop/certification-header-bg-10.png"}}>
        
<div className='w-full mx-auto py-8'>



  {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
  <div class="mx-6 py-10 text-center md:text-left">
    <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* <!-- Tailwind Elements section --> */}
      <div class="">
        <h6
          class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start text-gray-200 text-lg lg:text-3xl">
          
          VD ASSOCIATES
        </h6>
        <p className='text-gray-200 text-sm lg:ml-10'>
          Adv. Tax Consultant
        </p>
      </div>
      {/* <!-- Products section --> */}
      <div class=" items-center text-center">
        <h6
          class="mb-4 flex justify-center font-semibold text-gray-200 uppercase md:justify-start">
          Follow us on
        </h6>
        <p class="mb-4 flex gap-2 justify-center "><UilFacebook className=' text-white' />
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Facebook</a
          >
        </p>
        <p class="mb-4 flex gap-2 justify-center"><UilInstagram className=' text-white' />
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Instagram</a
          >
        </p>
        <p class="mb-4 flex gap-2 justify-center"><UilLinkedin className=' text-white' />
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Linkedin</a
          >
        </p>
        
      </div>
      {/* <!-- Useful links section --> */}
      <div class="">
        <h6
          class="mb-4 flex justify-center font-semibold text-gray-200 uppercase md:justify-start">
          Useful links
        </h6>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Firm Profile</a
          >
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Services</a
          >
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Blog</a
          >
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Careers</a
          >
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Contect Us</a
          >
        </p>
      </div>
      {/* <!-- Contact section --> */}
      <div>
        <h6
          class="mb-4 flex justify-center font-semibold text-gray-200 uppercase md:justify-start">
          Contact
        </h6>
        <p class="mb-4 items-center justify-center md:justify-start flex gap-2">
          <UilPhone className='text-gray-200'/>
        <a className='text-gray-200'>
        0755-4917030
        </a>
        
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start gap-2">
          <UilMobileAndroid  className='text-gray-200 h-8 w-8'/>
<a  className='text-gray-200'>

          +91-7024389378-7024383158
</a>
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start gap-2">
          <UilEnvelopeMinus className='text-gray-200'/>
       <a className='text-gray-200'>
          contect@vdassociates2016.com

       </a>
        </p>
        <p class="flex items-center justify-center md:justify-start gap-2">
          <UilMapMarker className='text-gray-200'/>
        <a className='text-gray-200'>

          10 A Ravidas Nagar Minal Road Bhopal
        </a>
        </p>
      </div>
    </div>
  </div>

  {/* <!--Copyright section--> */}
  <div class=" p-6 text-center ">
    <span className='text-gray-200'>© 2024 Copyright:</span>
    <a
      class="font-semibold text-gray-200"
      href="https://tailwind-elements.com/"
      >VD Associates</a
    >
  </div>


</div>

</footer>
    </div>
  )
}
