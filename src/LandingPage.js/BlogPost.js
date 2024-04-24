import React from 'react'

export default function BlogPost() {
    return (

      <>
        <div className="mb-32 mt-6 text-center lg:text-left justify-center lg:ml-28">
    
          <div className="container text-center  ">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-gray-100 px-6 py-12  md:px-12  ">
                  <h2 className="mb-4 lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold text-gray-700 font-serif uppercase text-left">Read our latest blog posts</h2>
                  <p className="mb-4 text-blue-500 font-semibold">
                  Second dummy blog post
                  </p>
                  <p className="mb-6 text-blue-500 font-semibold">
                  Third dummy blog post
                  </p>
                  <button class="bg-transparent group w-40 rounded-full hover:bg-blue-500 text-blue-700 duration-200  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
  Blog <span className='group-hover:translate-x-4'> </span>
</button> 
                </div>
              </div>
    
              <div className=''>
                <img src="https://maargassociates.com/wp-content/uploads/2021/08/blog_diseno.jpg" className="  lg:z-50 lg:hover:animate-bounce cursor-auto duration-1000 delay-700    lg:-ml-10  lg:w-96 h-96 w-full shadow-2xl dark:shadow-black/20" alt="" />
              </div>
            </div>
          </div>
        </div>

      </>
      );
}
