import React from 'react'
import SidebarItem from './SidebarItem'
function Sidebar() {
  return (
    <div className='h-screen bg-black text-white w-2/12 rounded-3xl flex flex-col items-center' >
      <h3 className='text-3xl font-bold leading-10 my-10 '>Board.</h3>
      <SidebarItem/>
      <SidebarItem/>
      <SidebarItem/>
      <SidebarItem/>
      <SidebarItem/>
      <SidebarItem/>
      <div className='absolute bottom-0 font-normal text-base leading-5 '>
        Help
      </div>
    </div>
    
  )
}

export default Sidebar