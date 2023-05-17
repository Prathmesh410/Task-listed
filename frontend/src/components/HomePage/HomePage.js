import React from 'react'
import InfoCardWrapper from './Dashboard/InfoCardWrapper'
import Sidebar from './Sidebar/Sidebar'
import PieChart from './Card/Pie'

function HomePage() {
  return (
    
    <div className='p-12 flex justify-between  bg-gray-100'>
      <Sidebar />
      <div className='w-10/12 pl-12 border-3'>
      <InfoCardWrapper className = 'h-3/6' />
      <div className='flex justify-between'>
        <PieChart/>
      </div>
      </div>
      </div>
    
  )
}

export default HomePage