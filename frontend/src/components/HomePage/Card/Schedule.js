import React from 'react'
import { faker } from '@faker-js/faker';
import Card from './Card'
import { generateTaskDummyData } from './dummyDataGenerator'
const count =  faker.number.int({min:2,max:10});
const taskData = generateTaskDummyData(count);
// console.log(taskData);

function Schedule() {
  return (
    <Card  className = 'card'>
          <p className='font-bold text-xl leading-6 mb-8 text-black'>Today's Schedule</p>
          <div className='w-full h-2/5 flex mb-2'>
            <div className=' w-3 h-full' style={{background:`${taskData[0].color}`}}></div>  
            <div className='w-full ml-3'>
              <div className='text-lg text-gray-600 font-medium'>Meeting with suppliers</div>
              <div className='font-normal text-gray-600 '>14:00 - 20.00</div>
              <div className='font-normal text-gray-600'>at Sunset Road</div>
            </div>
        </div>
        
    
    </Card>
  )
}

export default Schedule