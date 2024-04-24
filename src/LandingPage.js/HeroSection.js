import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { UilNewspaper } from "@iconscout/react-unicons";

const HeroSection = () => {
  

  return (
    <>
 <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={5000}
    >
      <div>

      <div className="relative h-96 lg:h-[522px]">
      <img
        src="https://images.yourstory.com/cs/1/7d4cde40-59f5-11e9-a0b7-f5ecf6241dce/the-power-and-positive-impact-of-team-building1564577544513.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-blue-950 h-96 lg:h-[522px]">
       
        
        <div className="relative">
        
            <div className="">
              <h2 className=" font-sans text-center text-4xl py-40 font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
           VD ASSOCIATES<br/><p className='text-2xl py-4'>Strengthening Businesses through Better Financial Planning</p>
              </h2>
            </div>
          
        
        </div>
      </div>
    </div>
      </div>
      <div>
      <div className="relative h-96 lg:h-[522px]">
      <img
        src="https://c0.wallpaperflare.com/preview/970/895/709/income-tax-calculator-accounting-financial.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover bg-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-blue-950 h-96 lg:h-[522px]">
       
        
        <div className="relative">
        
            <div className="">
              <div className=" font-sans text-center text-6xl py-40 font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
           VD ASSOCIATES<br/><p className='text-2xl py-4'>Strengthening Businesses through Better Financial Planning</p>
              </div>
            </div>
          
        
        </div>
      </div>
    </div>
      </div>
      <div>
      <div className="relative h-96 lg:h-[522px]">
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-blue-950 h-96 lg:h-[522px]">
       
        
        <div className="relative">
        
            <div className="">
              <h2 className=" font-sans text-center text-4xl py-40 font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
           VD ASSOCIATES<br/><p className='text-2xl py-4'>Strengthening Businesses through Better Financial Planning</p>
              </h2>
            </div>
          
        
        </div>
      </div>
    </div>
      </div>
    </Carousel>

      <div className="mt-10 py-8">
        <h1 className="text-4xl text-center font-bold block uppercase text-gray-700 font-serif">
          Why is <span className="text-blue-600">GEN IT</span> so popular among
          tax professionals?
        </h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full md:px-20 p-8  gap-4 mt-6">
          <div className="bg-white w-full py-4 h-24 group relative mt-2 shadow-2xl border-1 border-gray-700 font-sans ">
            <div className="flex px-4">
              <h1>
                {" "}
                <UilNewspaper className="w-16 h-10 group-hover:text-blue-600 mt-4" />
              </h1>{" "}
              <div className="mx-2 p-1">
                <h1 className="text-gray-800 font-bold group-hover:text-blue-700 font-serif mt-2 uppercase text-sm">
                  Instant filing
                </h1>
                <h1 className="font-sans">Income Tax Filing</h1>
              </div>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700"></span>

              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700"></span>{" "}
            </div>
          </div>
          <div className="bg-white w-full py-4 h-24 group relative mt-2 shadow-2xl ">
            <div className="flex px-4">
              <h1>
                {" "}
                <UilNewspaper className="w-16 h-10 group-hover:text-blue-600 mt-4" />
              </h1>{" "}
              <div className="mx-2">
               <h1 className="text-gray-800 font-bold group-hover:text-blue-700 font-serif mt-2 uppercase text-sm">
                  Instant filing
                </h1>
                <h1 className="font-sans">ITR Filing</h1>
              </div>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700  "></span>

              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700"></span>{" "}
            </div>
          </div>
          <div className="bg-white border-1 border-white w-full py-4 h-24 group relative mt-2 shadow-xl ">
            <div className="flex px-4">
              <h1>
                {" "}
                <UilNewspaper className="w-16 h-10 group-hover:text-blue-600 mt-4" />
              </h1>{" "}
              <div className="mx-2">
               <h1 className="text-gray-800 font-bold group-hover:text-blue-700 font-serif mt-2 uppercase text-sm">
                  GST 
                </h1>
                <h1 className="font-sans">GST Filing</h1>
              </div>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700"></span>

              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700"></span>{" "}
            </div>
          </div>
          <div className="bg-white border-1 border-white w-full py-4 h-24 group relative lg:mt-8 shadow-xl ">
            <div className="flex px-4">
              <h1>
                {" "}
                <UilNewspaper className="w-16 h-10 group-hover:text-blue-600 mt-4" />
              </h1>{" "}
              <div className="mx-2">
               <h1 className="text-gray-800 font-bold group-hover:text-blue-700 font-serif mt-2 uppercase text-sm">
                  Audit
                </h1>
                <h1 className="font-sans">Accounting And Audit</h1>
              </div>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700"></span>

              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700"></span>{" "}
            </div>
          </div>
          <div className="bg-white border-1 border-white w-full py-4 h-24 group relative lg:mt-8 shadow-xl ">
            <div className="flex px-4 justify-left leading-normal">
              <h1>
                {" "}
                <UilNewspaper className="w-16 h-10 group-hover:text-blue-600 mt-4" />
              </h1>{" "}
              <div className="mx-2 item-center">
               <h1 className="text-gray-800 font-bold group-hover:text-blue-700 font-serif mt-2 uppercase text-sm">
                  Online Work
                </h1>
                <h1 className="font-sans">Pan Card/Shop act/Nagar Nigam Work</h1>
              </div>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700"></span>

              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700"></span>{" "}
            </div>
          </div>
          <div className="bg-white border-1 border-white w-full py-4 h-24 group relative lg:mt-8 shadow-xl ">
            <div className="flex justify-left leading-normal">
              <h1>
                {" "}
                <UilNewspaper className="w-16 h-10 group-hover:text-blue-600 mt-4" />
              </h1>{" "}
              <div className="mx-2  items-center">
               <h1 className="text-gray-800 font-bold group-hover:text-blue-700 font-serif mt-2 uppercase text-sm">
                  Instant Loan
                </h1>
                <h1 className="font-sans">Parsonal loan/home loan</h1>
              </div>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700"></span>

              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 group-hover:transition-all duration-700"></span>{" "}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
