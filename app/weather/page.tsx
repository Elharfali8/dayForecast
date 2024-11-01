'use client'

import { fetchWeatherData } from "@/features/weatherSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch } from "@/store"
import { AirConditions, Forecast, TodayForecast, WeekForecast } from "@/components/weather"
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link"

function WeatherPage() {
  const { isLoading, error, data, city} = useSelector((store: any) => store.weather)
  const dispatch = useDispatch<AppDispatch>()
  const [cityName, setCityName] = useState(city || '')

  useEffect(() => {
    dispatch(fetchWeatherData({city:cityName}))
  }, [dispatch, cityName])

  

  if (isLoading) {
    return (
      <main className='min-h-[calc(100vh-80px)] p-4 md:p-8 grid place-items-center '>
        <div className="container main-container card h-full rounded-[8px] p-2 grid place-items-center">
            <h1 className="text-2xl md:text-4xl lg:text-6xl poppins-semibold tracking-wider">Loading...</h1>
        </div>
        </main>
    )
  }


  return (
    <main className='min-h-[calc(100vh-80px)] p-4 md:p-8 '>
      <div className="container main-container py-4">
        <div>
          <Link href={'/'} className="flex items-center text-lg lg:text-xl text-primary transition-all ease-in-out duration-150 hover:text-gray-700 ">
        <span className="mr-2"><FaArrowLeft /></span>back to home
        </Link>
        </div>
      </div>
      <div className="container main-container card h-full rounded-[8px] p-2 grid lg:grid-cols-5 gap-6">
        <div className="col-span-1 lg:col-span-3 ">
          <Forecast data={data} />
          <TodayForecast data={data} />
          <AirConditions data={data} />
        </div>
        <div className=" col-span-1 lg:col-span-2 p-2 lg:mt-4">
          <WeekForecast data={data} />
        </div>
          </div>
    </main>
  )
}

export default WeatherPage