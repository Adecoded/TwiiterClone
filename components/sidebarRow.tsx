import React from 'react'

interface Props {
Icon:(props: SVGProps<SVGSVGElement>) => JSX.Element
title:string
}
function sidebarRow({Icon, title}:Props) {
  return <div className="flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 Cursor:pointer transition-all duration-200 group"> 
    <Icon className='h-6 w-6'/>
    <p className='text-base lg:text-xl font-light hidden md:inline-flex group-hover:text-twitter '>{title}</p>
  </div>
 
}

export default sidebarRow