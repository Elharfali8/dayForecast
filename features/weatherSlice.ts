import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

type State = {
    isLoading: boolean,
    data: WeatherData | null,
    error: any,
}

const initialState: State = {
    isLoading: false,
    data: null,
    error: null
}

export interface WeatherData {
    // Define properties here based on the response structure from the OpenWeatherMap API.
    // For example:
    main: {
      temp: number;
      // Add more properties as needed.
    };
    coord: {
        lon: number;
        lat: number;
      };
    weather: {
      description: string;
        icon: string;
        main: string;
    }[];
    name: string;
    // Add additional properties if needed.
  }

export const fetchWeatherData = createAsyncThunk < WeatherData, { city: string }>('weatherSlice/fetchWeather', async ({ city }: { city: string }) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const data = response.data
        return data
    } catch (error:any) {
        throw new Error(error.message || 'there was an error')
    }
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchWeatherData.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchWeatherData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase(fetchWeatherData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Failed to fetch data';
        });
    }
})

export default weatherSlice.reducer