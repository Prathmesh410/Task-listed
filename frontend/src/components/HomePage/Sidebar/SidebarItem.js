import React from 'react'
function SidebarItem({icon,title}) {
  return (
    <div className='w-8/12 h-6 flex items-center text-white  my-5 cursor-pointer hover:font-semibold '>
      <img src={icon} alt="icon img" className='mr-5 w-6 h-5  '/>
      <p className=' text-lg leading-normal md:leading-6 sidebar-text'>{title}</p>
    </div>
  )
}

export default SidebarItem;