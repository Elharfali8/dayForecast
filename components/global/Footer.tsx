import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='py-8 lg:py-14'>
      <div className="container main-container grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div>
          <h1 className='text-xl md:text-2xl tracking-wide poppins-semibold'>DayForecast</h1>
        </div>
        <div className='grid gap-y-1'>
        <Link href="/" className="text-lg lg:text-xl hover:tracking-wider tracking-wide ">Home</Link>
          <Link href="/about" className="text-lg lg:text-xl hover:tracking-wider tracking-wide ">About</Link>
          <Link href="#contact" className="text-lg lg:text-xl hover:tracking-wider tracking-wide ">Contact</Link>
          <Link href="/" className="text-lg lg:text-xl hover:tracking-wider tracking-wide ">Privacy Policy</Link>
        </div>
        <div>
          <p className='sm:text-lg'>Contact us: elharfali.youssef.20@gmail.com</p>
          <p className='sm:text-lg'>Phone: +211 611765659</p>
        </div>
        
      </div>
      <div className="container main-container grid place-items-center">
      <div className="text-center text-sm md:text-base mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} <span className='tracking-wide poppins-medium'>Elharfali</span>. All rights reserved.</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer