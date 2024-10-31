import { configureStore } from '@reduxjs/toolkit'
import  weatherReducer  from './features/weatherSlice'
import todayForecastReducer from './features/today/todayForecastSlice';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        todayForecast: todayForecastReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;