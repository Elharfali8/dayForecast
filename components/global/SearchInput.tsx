import React from 'react'
import {FaSearch} from 'react-icons/fa'

function SearchInput() {
  return (
      <div className='grid place-items-center'>
          <form className='w-full max-w-[450px] grid place-items-center relative'>
              <input type='text' className='input h-10 lg:h-12 w-full  text-white dark:text-black pl-2 focus:outline-none rounded-xl text-lg tracking-wide' placeholder='Search for a city...' />
              <button type='button' className='absolute text-white dark:text-black right-2'>
                  <FaSearch className='w-6 h-6' />
              </button>
          </form>
    </div>
  )
}

export default SearchInput