import React from 'react'
import InfoCardWrapper from '../Dashboard/InfoCardWrapper'
import Sidebar from './Sidebar/Sidebar'

function HomePage() {
  return (
    
    <div className='p-12 flex justify-between '>
      <Sidebar />
      <div className='w-10/12 pl-12'>
      <InfoCardWrapper className = 'h-3/6' />
      </div>
      </div>
    
  )
}

export default HomePage