'use client'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiveDaysForecast } from '@/features/fiveDays/fiveDaysSlice';
import { AppDispatch } from '@/store';
import { format } from 'date-fns';
import { WeatherTitle } from '../global';

interface FiveDaysProps {
    data: {
        coord: {
            lon: number;
            lat: number;
        };
        name: string;
    };
}

function WeekForecast({ data }: FiveDaysProps) {
    const lon = data?.coord.lon;
    const lat = data?.coord.lat;
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, data: forecastData, error } = useSelector((store: any) => store.fiveDays);

    useEffect(() => {
        dispatch(fetchFiveDaysForecast({ lat, lon }));
    }, [dispatch, lon, lat]);

    // Group forecasts by day and format day name + time
    const dailyForecast = forecastData.reduce((acc: any, item: any) => {
        const date = new Date(item.dt * 1000);
        const dayName = format(date, 'EEEE'); // e.g., 'Monday'
        const time = format(date, 'HH:mm'); // e.g., '15:00'

        if (!acc[dayName]) {
            acc[dayName] = [];
        }
        acc[dayName].push({ time, temp: item.main.temp, icon: item.weather[0].icon });

        return acc;
    }, {});

    return (
        <div className='secondary-card px-2 lg:px-4 py-4 lg:py-6 rounded-[9px]'>
            <WeatherTitle text='5-Day Forecast' />
            <div className='grid gap-y-6'> {/* Increased gap between days for readability */}
                {Object.entries(dailyForecast).map(([day, times]: any) => (
                    <div key={day} className='flex items-center gap-4 flex-wrap card p-2 rounded-[9px] shadow-lg  dark:shadow-black '>
                        <h3 className='text-lg poppins-medium mr-2'>{day}: </h3>
                        <div className='grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-5'> {/* Responsive grid layout */}
                            {times.map((timeData: any, index: number) => (
                                <div key={index} className='text-center flex flex-col items-center gap-1'>
                                    <p className='text-secondary text-sm'>{timeData.time}</p>
                                    <div className=' bg-blue-400 rounded-full p-2 md:p-1 shadow-lg shadow-gray-500 dark:shadow-black mb-1'>
                                    <img
                                        src={`http://openweathermap.org/img/wn/${timeData.icon}.png`}
                                        alt="weather icon"
                                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12" // Responsive icon size
                                        />
                                        </div>
                                    <p className='poppins-medium text-sm sm:text-base'>{Math.round(timeData.temp)}°C</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeekForecast;
