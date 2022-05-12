import React, { useState } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
function Tweetbox() {
  const [Input, setInput] =  useState<string>('')
  return <div className='flex space-x-2 p-5'>
      <img
      className='h-14 w-14 object-cover rounded-full mt-4 items-center'
       src='https://links.papareact.com/gll'  />
       <div className='flex flex-1 items-center pl-2'>
         <form className='flex flex-1 flex-col'>
           <input value={Input} 
           onChange={(e) => setInput(e.target.value)}
           type="text" placeholder="what's happening" className='h-24 w-full text-xl outline-none placeholder:text-xl' />
           <div className='flex items-center'>
             <div className='flex space-x-2 text-twitter flex-1'>{/* icon */}
             <PhotographIcon className='w-5 h-5 cursor-pointer  transition-transform duration-150 ease-out hover:scale-150'/>
             <SearchCircleIcon className='w-5 h-5'/>
             <EmojiHappyIcon className='w-5 h-5'/>
             <CalendarIcon className='w-5 h-5'/>
             <LocationMarkerIcon className='w-5 h-5'/>
             </div>
             <button disabled={!Input} className='bg-twitter pl-7 pr-7 pt-3 pb-3 font-bold text-white rounded-full w-35 disabled:opacity-40'>Tweet</button>
           </div>
         </form>
       </div>
    </div>
  
}

export default Tweetbox
