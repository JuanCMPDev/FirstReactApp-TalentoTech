import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Navbar = () => {
  return (
    <div className="w-[1024px] h-full flex items-center justify-between pl-8 pr-8 bg-[#264653] ">
        <div className='flex gap-5 h-10 mt-4 mb-4 cursor-pointer'>
          <img src={viteLogo} alt="vite-logo.svg" />
          <img src={reactLogo} alt="react-logo.svg" />
        </div>
        <div>
          <nav>
            <ul className='flex flex-row gap-5 text-white'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>Project</li>
              <li className='cursor-pointer'>About</li>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default Navbar