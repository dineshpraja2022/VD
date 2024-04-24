import {useState} from 'react'
import React from 'react';
import { Link } from "react-router-dom";


export default function Sdbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [isDropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown2 = () => {
    setDropdown2Open(!isDropdown2Open);
  };
  const [isDropdown3Open, setDropdown3Open] = useState(false);

  const toggleDropdown3 = () => {
    setDropdown3Open(!isDropdown3Open);
  };
  const [isDropdown4Open, setDropdown4Open] = useState(false);

  const toggleDropdown4 = () => {
    setDropdown4Open(!isDropdown4Open);
  };
  const [isDropdown5Open, setDropdown5Open] = useState(false);

  const toggleDropdown5 = () => {
    setDropdown5Open(!isDropdown5Open);
  };

  return (
    <div>
    
     
<div class="bg-[#03023b] h-20 sm:mt-24  mt-36 md:mt-0 lg:mt-0  w-auto  ">
  <div class=" grid grid-cols-1 justify-between mx-auto">
 
  <div class="flex md:hidden px-10 py-4">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Loginss</button>
      <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* <span className="sr-only">Open main menu</span> */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
           
  </div>
  <div class="items-center justify-center  hidden  md:flex md:w-auto md:order-1 p-4">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
      <li>
        <Link to="/" class="block py-2 pl-3 pr-4 text-white relative group" active>Home <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-blue-600 group-hover:w-16 group-hover:transition-all duration-700"></span></Link>
      </li>
      <li>
        <Link to="/About" class="block py-2 pl-3 pr-4 text-white relative group ">About <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-blue-600 group-hover:w-16 group-hover:transition-all duration-700"></span></Link>
      </li>

      <li>
        <Link to="/Contect" class="block py-2 pl-3 pr-4 text-white relative group">Contact <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-blue-600 group-hover:w-16 group-hover:transition-all duration-700"></span></Link>
      </li>
      <li>
      <Link to="/Login" class="block py-2 pl-3 pr-4 text-white relative group">Login <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-blue-600 group-hover:w-16 group-hover:transition-all duration-700"></span></Link>

      </li>
      <li>
      <Link to="/Registration" class="block py-2 pl-3 pr-4 text-white relative group">REG <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-blue-600 group-hover:w-16 group-hover:transition-all duration-700"></span></Link>

      </li>
    
    </ul>
  </div>
  </div>
  {isOpen && (
        <div className="md:hidden  relative z-50  ">
          <div className="  pb-3  sm:px-3 justify-center text-white  text-center bg-[#03023b]/75 h-screen     ">
            <a
              href="#"
              className=" hover:text-white block px-3 py-2 hover:border-b-2 hover:border-white hover:duration-700 font-medium"
            >
              Home 
            </a>
            <a
              href="#"
              className="hover:text-white block px-3 py-2 hover:border-b-2 hover:border-white hover:duration-700 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-white block px-3 py-2 hover:border-b-2 hover:border-white hover:duration-700 font-medium"
            >
              Blog
            </a>  <a
              href="#"
              className="hover:text-white block px-3 py-2 hover:border-b-2 hover:border-white hover:duration-700 font-medium"
            >
              Contect
            </a>   
            
            {/* Add more as here */}
          </div>
        </div>
      )}
</div>





    </div>
  )
}
