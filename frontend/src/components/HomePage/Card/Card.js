import React from 'react'

function Card({children}) {
  return (
    <div className='rounded-3xl bg-white my-10 p-8 w-fit'>{children}</div>
  )
}

export default Card