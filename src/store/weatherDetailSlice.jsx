import { createSlice } from "@reduxjs/toolkit";

const weatherDetailSlice=createSlice({
    name:"weatherDetails",
    initialState:{
        currentWeather:"",
    },
    reducers:{
        setCurrentWeather:(state,action)=>{
            state.currentWeather=action.payload;
        },
    }
})
export const {setCurrentWeather}=weatherDetailSlice.actions;
export default weatherDetailSlice.reducer;