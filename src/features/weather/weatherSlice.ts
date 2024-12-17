import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/api.ts";
import {weatherPayloadType, weatherStateType} from "../types/types";


const initialState:weatherStateType={
    country:"Israel",
    city: "Tel Aviv",
    temp: 28,

    pressure: 12000,
    sunset:1000,
    message:'Enter your city',
}
export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers:builder => {
        builder
            .addCase(fetchWeather.pending,
                (state)=>({...state, message:"Loading..."}))
            .addCase(fetchWeather.fulfilled,
                (state,action:PayloadAction<weatherPayloadType>)=>( {...state,...action.payload,message:""}))
            .addCase(fetchWeather.rejected,
                (state)=>( {...state,message:"This city doesn't exist"}))
    }
})


export default weatherSlice.reducer;




