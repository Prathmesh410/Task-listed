import React from 'react'
import SidebarItem from './SidebarItem'
import Icon1 from "./SidebarIcons/SidebarIcon1.svg"
import Icon2 from "./SidebarIcons/SidebarIcon2.svg"
import Icon3 from "./SidebarIcons/SidebarIcon3.svg"
import Icon4 from "./SidebarIcons/SidebarIcon4.svg"
import Icon5 from "./SidebarIcons/SidebarIcon5.svg"
function Sidebar() {
  return (
    <div className='h-screen bg-black text-white w-2/12 rounded-3xl flex flex-col items-center' >
      <h3 className='text-4xl font-bold leading-10 my-10 '>Board.</h3>
      <SidebarItem title="Dashboard" icon={Icon1}/>
      <SidebarItem title="Transactions" icon={Icon2}/>
      <SidebarItem title="Schedules" icon={Icon3}/>
      <SidebarItem title="Users" icon={Icon4}/>
      <SidebarItem title="Settings" icon={Icon5}/>
      <div className='absolute bottom-0 font-normal text-base leading-5 '>
        Help
      </div>
    </div>
    
  )
}

export default Sidebar