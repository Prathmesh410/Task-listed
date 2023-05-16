import React from 'react'
function SidebarItem({icon,title}) {
  return (
    <div className='w-8/12 h-6 flex items-center text-white  my-5'>
      <img src={icon} alt="icon img" className='mr-5 w-7 h-7'/>
      <p className='text-xl leading-normal md:leading-6 hover:font-semibold '>{title}</p>
    </div>
  )
}

export default SidebarItem;