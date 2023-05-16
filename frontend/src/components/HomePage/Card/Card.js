import React from 'react'

function Card({children}) {
  return (
    <div className='border-2 rounded-xl bg-white my-10 p-8 w-full '>{children}</div>
  )
}

export default Card