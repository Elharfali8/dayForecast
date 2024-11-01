'use client'
import { addCity } from '@/features/weatherSlice'
import { AppDispatch } from '@/store'
import Link from 'next/link'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useDispatch } from 'react-redux'

function SearchInput() {
  const [cityName, setCityName] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleCity = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCityName(value)
  }
  return (
      <div className='grid place-items-center'>
          <form className='w-full max-w-[450px] grid place-items-center relative'>
              <input type='text' className='input h-10 lg:h-12 w-full  text-white dark:text-black pl-2 focus:outline-none rounded-xl text-lg tracking-wide' placeholder='Search for a city...' value={cityName} onChange={handleCity} />
              <Link href={`/weather`}  className='absolute text-white dark:text-black right-2' onClick={() => dispatch(addCity(cityName))}>
                  <FaSearch className='w-6 h-6' />
              </Link>
          </form>
    </div>
  )
}

export default SearchInput