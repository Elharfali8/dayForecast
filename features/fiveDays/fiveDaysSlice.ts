import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface WeatherInfo {
    dt: number;
    main: {
        temp: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
}

interface Forecast {
    list: WeatherInfo[];
}

interface ForecastState {
    isLoading: boolean;
    data: WeatherInfo[];
    error: string | null;
}

const initialState: ForecastState = {
    isLoading: false,
    data: [],
    error: null,
};

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const fetchFiveDaysForecast = createAsyncThunk<WeatherInfo[], { lat: number; lon: number }, { rejectValue: string }>(
    'forecast/fetchFiveDays',
    async ({ lat, lon }, thunkAPI) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
            );
            return response.data.list; // Just returning the 'list' array here
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fiveDaysSlice = createSlice({
    name: 'fiveDays',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFiveDaysForecast.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFiveDaysForecast.fulfilled, (state, action: PayloadAction<WeatherInfo[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchFiveDaysForecast.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to fetch data';
            });
    },
});

export default fiveDaysSlice.reducer;
