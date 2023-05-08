import React from 'react'
import {VscDashboard} from 'react-icons/vsc'
function SidebarItem() {
  return (
    <div className='w-8/12 h-6 flex items-center text-white justify-center my-4'>
      <VscDashboard className='text-2xl font-medium mr-5'/>
      <p className='text-lg leading-normal md:leading-6 hover:font-semibold '> Dashboard</p>
    </div>
  )
}

export default SidebarItem;