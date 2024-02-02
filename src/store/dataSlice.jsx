import { createSlice } from '@reduxjs/toolkit'


const dataSlice=createSlice({
    name:"dataSlice",
    initialState:{
        longitude:"77.2167",
        latitude:"28.6667",
        cityName:"Delhi",
    },
    reducers:{
        longitudeValue:(state,action)=>{
            state.longitude = action.payload;
        },
        latitudeValue:(state,action)=>{
            state.latitude=action.payload;
        },
        cityNameValue:(state,action)=>{
            state.cityName=action.payload;
        }
    }
});
export const {longitudeValue, latitudeValue,cityNameValue}=dataSlice.actions;
export default dataSlice.reducer;