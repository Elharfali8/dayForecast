'use client'

import { fetchTodayForecast } from "@/features/today/todayForecastSlice";
import { AppDispatch } from "@/store";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WeatherTitle } from "../global";

interface TodayForecastProps {
    data: {
        coord: {
            lon: number;
            lat: number;
        };
        name: string;
    }
}

function TodayForecast({ data }: TodayForecastProps) {
    const lon = data?.coord.lon;
    const lat = data?.coord.lat;
    const cityName = data?.name
    const { data: todayData, isLoading, error } = useSelector((store: any) => store.todayForecast)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchTodayForecast({city: cityName}))
    }, [dispatch, cityName])

  return (
      <div className="mx-2 mt-4 mb-6 lg:mb-8 secondary-card p-4 rounded-[10px]">
          <WeatherTitle text='hourly forecast' />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6  ">
              {todayData?.map((item:any, index:number) => {
                  const { dt, main, weather } = item
                  const mainCondition = weather[0]?.main
                  const icon = weather[0]?.icon
                  const timestamp = dt
                  const date = new Date(timestamp * 1000);
                  const timeString = date.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: false, 
                });
                  return (
                      <div key={index} className="grid place-items-center card rounded-[9px]">
                          <span className="mb-1 lg:mb-2">
                              <Image src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" width={60} height={60} />
                          </span>
                          <div className="grid place-items-center mb-2">
                              <h3>{timeString}</h3>
                              <p className="text-secondary mb-1 text-lg">{mainCondition}</p>
                              <p className="text-primary poppins-medium tracking-wide text-lg md:text-xl">{main?.temp}&deg;</p>
                          </div>
                      </div>
                  )
              })}
          </div>
    </div>
  )
}

export default TodayForecast