import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header items-center justify-center flex font-bold shadow-md line-height-10'>
      <NavLink to='/' className='w-10 h-10 rounded-lg bg-white mr-[20px] '>
        <p className='text-2xl font-bold'>AH</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar