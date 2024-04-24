import React from 'react'

export default function BoxText() {
  return (
    <div>
   <div className= 'flex flex-wrap  w-auto  mt-10 mx-auto lg:ml-40 lg:py-20 gap-6'>
    <div className='lg:ml-36 '><img src='https://maargassociates.com/wp-content/uploads/2021/08/home.jpg' className=' w-full  h-80'/> </div>
    <div className=' md:w-96 self-center  h-80 py-6'>
      <h1 className='text-2xl font-bold font-serif text-blue-700'>ABOUT</h1>
      <br/>
      <h1 className='text-3xl font-bold  font-serif text-gray-600'>VD ASSOCIATES</h1>
      <br/>
      <p className='text-sans text-sm  text-gray-600 font-thin '>
        At VD ASSOCIATES, strategy has always been to understand what is most important to the client to help them look for ways to create sustainable value addition and satisfaction in a truly professional environment.</p>
        <br/>
        <button type="button" class="text-white group bg-blue-500 hover:bg-blue-700 w-56 duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
    FIRM PROFILE
    <svg aria-hidden="true" class="w-5 h-5 ml-16 -mr-1 group-hover:translate-x-4 duration-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
    </div>

   </div>
   <section class="bg-cover bg-fixed mt-4 " style={{"background-image":"url('A5.jpg')"}}>
    <div className=' bg-blue-900/70'>
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-serif">73M+</dt>
              <dd class="font-light text-lg text-gray-200 font-sans">developers</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-serif">1B+</dt>
              <dd class="font-light text-gray-200 font-sans">contributors</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-serif">4M+</dt>
              <dd class="font-light text-gray-200 font-sans">organizations</dd>
          </div>
      </dl>
  </div>
      
    </div>
</section>
    </div>
  )
}
