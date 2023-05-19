import React from 'react'
import InfoCardWrapper from './Dashboard/InfoCardWrapper'
import Sidebar from './Sidebar/Sidebar'
import PieChart from './Card/Pie'
import Activity from './Card/Activity'
import Schedule from './Card/Schedule'
import "./homepage.css"

function HomePage() {
  return (
    
    <div className='p-12 flex justify-between bg-gray-100'>
      <Sidebar />
      <div className='w-10/12 pl-12 border-3'>
      <InfoCardWrapper className = 'h-3/6' />
      <Activity/>
      <div className='flex justify-around w-full'>
        <div className='w-1/2 pr-5'><PieChart/></div>
        <div className='w-1/2 pl-5'><Schedule/></div>
        </div>
      </div>
      </div>
    
  )
}

export default HomePage