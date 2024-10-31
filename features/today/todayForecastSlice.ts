import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Forecast {
    dt: number;
    dt_txt: string;
    main: {
        temp: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
}

interface TodayForecastState {
    isLoading: boolean;
    data: Forecast[];
    error: string | null;
}

const initialState: TodayForecastState = {
    isLoading: false,
    data: [],
    error: null,
};

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchTodayForecast = createAsyncThunk<Forecast[], { city: string }, { rejectValue: string }>(
    'todayForecast/fetchTodayForecast',
    async ({ city }, thunkAPI) => {
        try {
            const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await response.json();

            if (response.ok) {
                const today = new Date().toISOString().split('T')[0];
                const todayForecast = data.list.filter((forecast: Forecast) => forecast.dt_txt.startsWith(today));
                return todayForecast;
            } else {
                return thunkAPI.rejectWithValue(data.message);
            }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const todayForecastSlice = createSlice({
    name: 'todayForecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodayForecast.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchTodayForecast.fulfilled, (state, action: PayloadAction<Forecast[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTodayForecast.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to fetch data';
            });
    },
});

export default todayForecastSlice.reducer;
