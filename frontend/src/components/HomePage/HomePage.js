import React from 'react'
import InfoCardWrapper from './Dashboard/InfoCardWrapper'
import Sidebar from './Sidebar/Sidebar'
import PieChart from './Card/Pie'
import Activity from './Card/Activity'
import Schedule from './Card/Schedule'

function HomePage() {
  return (
    
    <div className='p-12 flex justify-between  bg-gray-100'>
      <Sidebar />
      <div className='w-10/12 pl-12 border-3'>
      <InfoCardWrapper className = 'h-3/6' />
      <Activity/>
      <div className='flex justify-between mt-0'>
        <PieChart />
        {/* <Schedule /> */}
        </div>
      </div>
      </div>
  )
}

export default HomePage