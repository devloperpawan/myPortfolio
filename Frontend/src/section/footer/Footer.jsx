import React from 'react'

const Footer = () => {
  return (
    <div className='md:w-[80%] w-full m-auto bg-transparent text-center my-5 text-lg font-medium text-gray-500'>
      <span className=''>© {new Date().getFullYear()} Pawan Kr. Singh. All rights reserved.</span>
    </div>
  )
}

export default Footer
