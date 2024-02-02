import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { CURRENT_WAETHER_API } from "../config";
import { setCurrentWeather } from "../store/weatherDetailSlice";

const useWeatherData = () => {
    const dispatch=useDispatch();
    const cordinates=useSelector(store=>store.data);
    //api call
    const getWeatherDetails=async()=>{
        const data=await fetch(CURRENT_WAETHER_API+`&lat=${cordinates.latitude}&lon=${cordinates.longitude}`);
        const result=await data.json();
        console.log(result);
        dispatch(setCurrentWeather(result));
    }
    useEffect(()=>{
        if(!cordinates) return;
        getWeatherDetails();
    },[cordinates]);
}

export default useWeatherData