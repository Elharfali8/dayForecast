import React from 'react'
import SearchInput from '../global/SearchInput'

function Hero() {
  return (
      <section className='min-h-[calc(100vh-80px)] p-4 md:p-8 lg:p-12 grid place-items-center'>
          <div className='card h-full rounded-xl px-8 py-8 lg:py-12 w-full grid place-items-center'>
        <div>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-center poppins-semibold mb-2 lg:mb-4 tracking-wide'>Discover the weather in <br /> every city.</h1>
        <p className='sm:text-lg lg:text-xl tracking-wide mb-6 lg:mb-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, delectus.</p>
        <SearchInput />
        </div>
          </div>
    </section>
  )
}

export default Hero