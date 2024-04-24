import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const OurService = () => {
  return (
    <>
<div className=' bg-white'>
<div> 
      <h1 className='text-3xl font-bold text-gray-700 mt-2 text-center mb-12 font-serif uppercase  '>Empanelments</h1>
    </div>
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
      className='lg:w-[1000px] w-full h-full py-8 p-4 mx-auto bg-white'
    >
      <div className='grid grid-cols-3 gap-4'>
        <img src="https://maargassociates.com/wp-content/uploads/2021/07/rbi-1.jpg" className=' h-38 w-40' alt="First slide" />
        <img src="https://maargassociates.com/wp-content/uploads/2021/07/audit.jpg" className=' h-38 w-40' alt="First slide" />
        <img src="https://maargassociates.com/wp-content/uploads/2021/08/cbi.png" className=' h-38 w-40' alt="First slide" />

      </div>
      <div className='grid grid-cols-3 gap-4'>
        <img src="https://maargassociates.com/wp-content/uploads/2021/08/bom.png" className=' h-38 w-40' alt="Second slide" />
        <img src="https://maargassociates.com/wp-content/uploads/2021/07/icai.jpg" className=' h-38 w-40' alt="First slide" />
        <img src="https://maargassociates.com/wp-content/uploads/2021/08/ubi.png" className=' h-38 w-40' alt="First slide" />

      </div>
      <div className='grid grid-cols-3 gap-4'>
        <img src="https://maargassociates.com/wp-content/uploads/2021/07/madhya.jpg" className=' h-38 w-40' alt="Third slide" />
        <img src="https://maargassociates.com/wp-content/uploads/2021/07/rbi-1.jpg" className=' h-38 w-40' alt="First slide" />
        <img src="https://maargassociates.com/wp-content/uploads/2021/08/sbi.png" className=' h-38 w-40' alt="First slide" />

      </div>
      <div className='grid grid-cols-3 gap-4'>
        <img src="https://maargassociates.com/wp-content/uploads/2021/08/bom.png" className='h-38 w-40' alt="Second slide" />
        <img src="https://maargassociates.com/wp-content/uploads/2021/07/icai.jpg" className='h-38 w-40' alt="First slide" />
        <img src="https://maargassociates.com/wp-content/uploads/2021/08/ubi.png" className='h-38 w-40' alt="First slide" />

      </div>
    </Carousel>

</div>

   
    </>
  );
}

export default OurService;
