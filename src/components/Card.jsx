import React from 'react'

const Card = ({className,children}) => {
  return (
    // <div className='flex w-1/3 border border-black rounded-lg flex-row'></div>
    <div className={className}>
      {children}
    </div>
  )
}

export default Card