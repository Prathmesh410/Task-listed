import React from 'react'
import {VscDashboard} from 'react-icons/vsc'
function Sidebar_item() {
  return (
    <div className='w-8/12 h-6 flex items-center text-white justify-center '>
      <VscDashboard className='text-2xl font-medium mr-5'/>
      <p className='text-lg leading-normal md:leading-6 hover:font-semibold '> Dashboard</p>
    </div>
  )
}

export default Sidebar_item