'use client'

import { fetchWeatherData } from "@/features/weatherSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch } from "@/store"
import { AirConditions, Forecast, TodayForecast, WeekForecast } from "@/components/weather"

function WeatherPage() {
  const { isLoading, error, data } = useSelector((store: any) => store.weather)
  const dispatch = useDispatch<AppDispatch>()
  const [city, setCity] = useState('london')

  useEffect(() => {
    dispatch(fetchWeatherData({city}))
  }, [dispatch, city])


  return (
      <main className='min-h-[calc(100vh-80px)] p-4 md:p-8 grid place-items-center'>
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