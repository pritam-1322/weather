import React from 'react'
import { ImHeart } from "react-icons/im";


const Loader = () => {
  return (
    <>
    <div className='flex flex-col justify-center mx-auto items-center w-screen h-screen '>
    <img src='./logo192.png' alt='loader'></img>
    <div className='flex flex-row my-10'> <p className="font-thin flex items-center text-base text-center">Made With <span><ImHeart className='text-red-600 mx-2' size="1rem"></ImHeart></span> By Pritam Singh</p></div>
  </div>
    </>
  )
}

export default Loader