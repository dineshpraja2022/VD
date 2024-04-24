import React from 'react'
import { UilWhatsapp } from '@iconscout/react-unicons'
import { UilChat } from '@iconscout/react-unicons'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function TextPhoto() {
  return (
    <>
    <div className='float-right  static bg-fuchsia-700 z-50'>
    <Popover placement="left">
          <PopoverHandler>
          <h1><UilWhatsapp className=' inline-block bottom-8 h-12 w-12 -ml-5 text-green-800  fixed'/></h1>
          </PopoverHandler>
          <PopoverContent className=' bg-green-700 -mt-6 -ml-5'>
            <Link  to='https://web.whatsapp.com/'>Whats APP</Link>
          </PopoverContent>
        </Popover>



<h1><UilChat className='inline-block ' /></h1>
    </div>
    </>
  )
}
