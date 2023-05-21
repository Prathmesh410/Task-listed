import React from 'react'
function InfoCard({color,title,value,icon}) {
  return (
    <div className='h-full w-1/5 rounded-3xl flex justify-between align-top shadow-sm' style={{background:color}} >
        <div className='p-5'>
      <p className='pt-4 font-normal  leading-6 pb-1'>{title}</p>
      <p className='font-bold text-2xl leading-8'>{value}</p>
        </div>
      <img src={icon} alt="icon img"  className='mr-4 h-6 mt-3 '/>
    </div>
  )
}

export default InfoCard