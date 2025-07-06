import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center'>

      <div className='w-3/4 my-3 rounded-4xl h-16 flex items-center justify-around p-3 px-5 text-green-900 shadow-lg border-x-2 border-gray-400'>

        <p className='font-bold text-3xl translate duration-300 ease-in-out hover:scale-105'>
          <NavLink to="/">Video AI</NavLink>
        </p>

        <section>
          <nav>
            <ul className='flex space-x-8 list-none'>
              <li>
                <NavLink
                  to="/caption"
                  className={({ isActive }) =>
                    `font-semibold cursor-pointer transition duration-300 ease-in-out  hover:underline underline-offset-2 hover:transform hover:translate-x-1 
                  ${isActive ? 'text-green-700 font-bold underline underline-offset-2' : ''}`
                  }
                >
                  Caption
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/translate/French"
                  className={({ isActive }) =>
                    `font-semibold cursor-pointer transition duration-300 ease-in-out hover:underline underline-offset-2 hover:translate-x-1 
                  ${isActive ? 'text-green-700 font-bold underline underline-offset-2' : ''}`
                  }
                >
                  Translation
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `font-semibold cursor-pointer transition duration-300 ease-in-out hover:underline underline-offset-2 hover:translate-x-1 
                  ${isActive ? 'text-green-700 font-bold underline underline-offset-2' : ''}`
                  }
                >
                  Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `font-semibold cursor-pointer transition duration-300 ease-in-out hover:underline underline-offset-2 hover:translate-x-1 
                  ${isActive ? 'text-green-700 font-bold underline underline-offset-2' : ''}`
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </nav>



        </section>
      </div>



    </div>
  )
}

export default Navbar