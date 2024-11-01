import { configureStore } from '@reduxjs/toolkit'
import  weatherReducer  from './features/weatherSlice'
import todayForecastReducer from './features/today/todayForecastSlice';
import fiveDaysReducer from './features/fiveDays/fiveDaysSlice';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        todayForecast: todayForecastReducer,
        fiveDays: fiveDaysReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;