import React from 'react'
import Card from './Card'
import PieChart from './Pie'

function TopProduct() {
  return (
    <Card >
          <div>
            <p className='font-bold  text-2xl leading-6'>Top products</p>
            <PieChart/>
          </div>
    
    
    </Card>
  )
}

export default TopProduct