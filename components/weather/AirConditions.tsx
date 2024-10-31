import React from 'react'
import { WeatherTitle } from '../global';
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";



interface AirForecastProps {
    data: {
        coord: {
            lon: number;
            lat: number;
        };
        main: {
            temp: number;
            feels_like: number;
            humidity: number;
        };
        wind: {
            speed: number;
        };
        weather: {
            description: string;
            icon: string;
        }[];
    };
}

function AirConditions({ data }: AirForecastProps) {
    const wind = data?.wind.speed
    const feel = data?.main.feels_like
    const humidity = data?.main.humidity

    
  return (
      <div className="mx-2  secondary-card p-4 rounded-[10px]">
          <WeatherTitle text='air conditions' />
          <div className='grid grid-cols-2  gap-4 lg:gap-6 mt-4 lg:mt-6'>
              {/* === */}
              <div className=''>
                  <div className='flex items-center gap-x-3 mb-2 lg:mb-3'>
                      <span><FaTemperatureHigh size={27} className='text-secondary' /></span>
                      <h3 className=' capitalize text-secondary text-lg md:text-xl tracking-wide poppins-medium'>real feel</h3>
                  </div>
                  <p className='poppins-semibold text-primary text-2xl md:text-3xl lg:text-4xl pl-4 lg:pl-10'>{feel}&deg;</p>
              </div>
              {/* === */}
              <div className=''>
                  <div className='flex items-center gap-x-3 mb-2 lg:mb-3'>
                      <span><FaWind size={27} className='text-secondary' /></span>
                      <h3 className=' capitalize text-secondary text-lg md:text-xl tracking-wide poppins-medium'>wind</h3>
                  </div>
                  <p className='poppins-semibold text-primary text-2xl md:text-3xl lg:text-4xl pl-4 lg:pl-10'>{wind} <span className='ml-1'>km/h</span></p>
              </div>
              {/* === */}
              <div className=''>
                  <div className='flex items-center gap-x-3 mb-2 lg:mb-3'>
                      <span><WiHumidity size={27} className='text-secondary' /></span>
                      <h3 className=' capitalize text-secondary text-lg md:text-xl tracking-wide poppins-medium'>humidity</h3>
                  </div>
                  <p className='poppins-semibold text-primary text-2xl md:text-3xl lg:text-4xl pl-4 lg:pl-10'>{humidity} <span className='ml-1'>%</span></p>
              </div>
              {/* === */}
          </div>
    </div>
  )
}

export default AirConditions