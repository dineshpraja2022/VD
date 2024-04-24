import React from "react";

import Nav from "./LandingPage.js/Nav";
import Footer from "./LandingPage.js/Footer";
import { useState } from "react";




export default function Registration() {
  const[emailErr,setemailErr]=useState(false)
  const[passwordErr,setpasswordErr]=useState(false)
  const[mobileErr,setmobileErr]=useState(false)
  const[emailID,setemailID]=useState("")
  const[passwordID,setpasswordID]=useState("")
  const[mobileID,setmobileID]=useState("")



 
  function loginHandler(e)
  {
    if(emailID.length<3 || passwordID.length<3 || mobileID.length<3)
    {
      alert('Please chack the enter value')
    }
    else
    {
      alert('conform your fleid')
    }
    e.preventDefault()
  }

  function useremail(e)
  {
    let item=e.target.value;
    if(item.length<3)
    {
      setemailErr(true)
    }
    else
    {
      setemailErr(false)

    }
    setemailID(item)
    console.warn(e.target.value.length)
  }
  function userpassword(e)
  {
    let item=e.target.value;
    if(item.length<3)
    {
      setpasswordErr(true)
    }
    else
    {
      setpasswordErr(false)

    }
    setpasswordID(item)
    console.warn(e.target.value.length)
  }

  function mobile(e)
  {
    let item=e.target.value;
    if(item.length<3)
    {
      setmobileErr(true)
    }
    else
    {
      setmobileErr(false)

    }
    setmobileID(item)
    console.warn(e.target.value.length)
  }
  return (
    <div>
      <Nav />
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-[#03023b]">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  The quick, brown fox <br className="hidden md:block" />
                  jumps over a lazy dog
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <div className="w-full  max-w-xl xl:px-8 xl:w-5/12">
                <div className=" shadow-2xl p-10 bg-white max-w-xl mx-auto lg:h-[500px]  justify-center  rounded">
                  <h2 className="text-4xl font-black mb-4 uppercase">
                    registration{" "}
                  </h2>

                  <form className=" grid grid-cols-1" onSubmit={loginHandler}>
                    <input
                    onChange={useremail}
                      type="email"
                      placeholder="Email_Id"
                      required
                      className="input border border-gray-400   appearance-none rounded w-full h-10 px-3 pt-4 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                    />
                    {emailErr?<div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-center w-12 bg-yellow-400">
        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
        </svg>
    </div>

    <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
            <span class="font-semibold text-yellow-400 dark:text-yellow-300">Warning</span>
            <p class="text-sm text-gray-600 dark:text-gray-200">
                Your image size is too large!
            </p>
        </div>
    </div>
</div>:''}
                    {/* {e?.type === "required" && <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-center w-12 bg-yellow-400">
        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
        </svg>
    </div>

    <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
            <span class="font-semibold text-yellow-400 dark:text-yellow-300">Warning</span>
            <p class="text-sm text-gray-600 dark:text-gray-200">
                Your image size is too large!
            </p>
        </div>
    </div>
</div>} */}
                    <input
                    onChange={userpassword}
                      type="password"
                      placeholder="password"
                      className="input border border-gray-400 mt-2 appearance-none rounded w-full px-3 pt-4 h-10 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                    />
                    {passwordErr?<div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-center w-12 bg-yellow-400">
        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
        </svg>
    </div>

    <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
            <span class="font-semibold text-yellow-400 dark:text-yellow-300">Warning</span>
            <p class="text-sm text-gray-600 dark:text-gray-200">
                Your image size is too large!
            </p>
        </div>
    </div>
</div>:""}

                    <input
                    onChange={mobile}
                      type="text"
                      placeholder="mobile number"
                      className="input border border-gray-400  mt-2 appearance-none rounded w-full px-3 h-10 pt-4 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                    />
                    {mobileErr?<div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-center w-12 bg-yellow-400">
        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
        </svg>
    </div>

    <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
            <span class="font-semibold text-yellow-400 dark:text-yellow-300">Warning</span>
            <p class="text-sm text-gray-600 dark:text-gray-200">
                Your image size is too large!
            </p>
        </div>
    </div>
</div>:''}

                    <button type="submit" className="text-blue-800 bg-transparent border-2 border-blue-800 w-full md:w-40 h-12 mt-4 hover:bg-blue-900 duration-150 hover:text-white hover:rounded-md lg:w-42">
                      Sign In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
