import React from 'react'
import { WeatherData } from '@/features/weatherSlice'
import Image from 'next/image';

interface ForecastProps {
    data: WeatherData
}

function Forecast({ data }: ForecastProps) {
    const lon = data?.coord.lon;
    const lat = data?.coord.lat;
    const temperature = data?.main.temp;
    const description = data?.weather[0]?.description;
    const main = data?.weather[0]?.main;
    const icon = data?.weather[0]?.icon;
    const cityName = data?.name;

  return (
      <div className='flex items-center justify-between lg:px-4 py-6 main-border '>
          <div className='grid gap-y-6 lg:gap-y-8'>
              <div>
              <h3 className='text-2xl md:text-4xl lg:text-5xl mb-1 capitalize tracking-wide poppins-semibold'>{cityName}</h3>
              <p className='md:text-lg'>{main}</p>
              </div>
              <h4 className='text-xl md:text-2xl lg:text-3xl poppins-medium  capitalize tracking-wide '>{temperature}&deg;</h4>
          </div>
          <div className='grid place-items-center'>
          <div className=' bg-blue-400 rounded-full p-2 md:p-1 shadow-lg shadow-gray-500 dark:shadow-black'>
              <img src={`https://openweathermap.org/img/wn/${icon}@2x.png
`}  alt='weather icon' className='w-14 h-14 sm:h-16 sm:w-16 md:h-[70px] md:w-[70px] lg:w-[80px] lg:h-[80px]'  />
                  </div>
              <p className='mt-2 text-secondary sm:text-lg xl:text-xl'>{description}</p>
          </div>
    </div>
  )
}

export default Forecast