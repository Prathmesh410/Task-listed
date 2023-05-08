import React from 'react'
import Sidebar_item from './Sidebar_item'
function Sidebar() {
  return (
    <div className='h-screen bg-black text-white w-2/12 rounded-3xl flex flex-col items-center' >
      <h3 >Board.</h3>
      
      <Sidebar_item/>
    </div>
  )
}

export default Sidebar