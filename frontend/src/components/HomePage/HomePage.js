import React from 'react'
import TopProduct from './Card/TopProduct'
import InfoCardWrapper from './Dashboard/InfoCardWrapper'
import Sidebar from './Sidebar/Sidebar'

function HomePage() {
  return (
    
    <div className='p-12 flex justify-between  bg-gray-100'>
      <Sidebar />
      <div className='w-10/12 pl-12 border-3'>
      <InfoCardWrapper className = 'h-3/6' />
      <div className='flex justify-between'>
        <TopProduct  />
      </div>
      </div>
      </div>
    
  )
}

export default HomePage