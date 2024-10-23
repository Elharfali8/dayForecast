import Link from 'next/link'
import React from 'react'
import DropDown from './DropDown'
import ToggleTheme from './ToggleTheme'

function Navbar() {
  return (
      <nav className='h-20  shadow-md border-b grid place-items-center'>
          <div className='container main-container flex items-center justify-between'>
              <div className='flex items-center justify-between'>
                  <Link href='/' className='text-xl lg:text-2xl text-primary poppins-medium tracking-wider'>DayForecast</Link>
              </div>
              <div className='flex items-center gap-x-3'>
          <DropDown />
          <ToggleTheme />
              </div>
          </div>
    </nav>
  )
}

export default Navbar