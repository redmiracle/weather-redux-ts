import {createSlice} from "@reduxjs/toolkit";

const initialState={
    country:"Israel",
    city: "Tel Aviv",
    temp: 28,
    pressure: 12000,
    sunset:{},
    message:'Enter your city',
}
export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        dataRequest: (state) => (
            {...state, message:"Loading..."}),
        dataSuccess: (state, action) => (
            {...state,...action.payload,message:""}),
        dataError:(state) => (
            {...state,message:"This city doesn't exist"}
        )
    }
})

export const {dataRequest,dataSuccess, dataError} = weatherSlice.actions;
export default weatherSlice.reducer;
