import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice"
import detailReducer from "./weatherDetailSlice";
const store=configureStore({
    reducer:{
        data:dataReducer,
        weatherDetails:detailReducer,
    }
})
export default store;