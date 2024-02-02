import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import geoCoordinates from '../geoCoordinates'
import { cityNameValue, longitudeValue } from '../store/dataSlice'
import { MdMyLocation } from "react-icons/md";
import { latitudeValue } from '../store/dataSlice'
import { TiWeatherWindy } from "react-icons/ti";
import Temperature from './Temperature';
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import useQueryLocation from '../hooks/useQueryLocation';
const CityInput = () => {
  const dispatch = useDispatch();
  const {errorMessage}=useQueryLocation();
  const [searchValue,setSearchValue]=useState("");
  const weatherData = useSelector(store => store.weatherDetails.currentWeather);
  if (!weatherData) return;

  const cordsHandler = async () => {
    const data = await geoCoordinates();
    dispatch(longitudeValue(data.longitude));
    dispatch(latitudeValue(data.latitude));
  }

  let time;
  const searchHandler = (e) => {
    e.preventDefault();
    const value =  searchValue.trim().toLowerCase();
    clearTimeout(time);
    time=setTimeout(()=>{
      dispatch(cityNameValue(value));
    },600);

};

  const date = new Date(weatherData.dt * 1000);
  function formatDateAndTime(date) {
    // Format date
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', optionsDate);

    // Format time
    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

    return { date: formattedDate, time: formattedTime };
  }
  const formattedDateAndTime = formatDateAndTime(date);

  return (
    <div className='flex lg:w-full lg:h-screen flex-col fixed py-[1rem] px-8 shadow-blue-200 shadow-xl w-screen relative'>

      <div className='flex justify-center items-center border rounded-lg px-1 py-1'>
      <MdMyLocation className='ml-4 cursor-pointer' onClick={cordsHandler} />
        <input className='ml-2 w-3/4 pl-3' type="text" placeholder="search for places" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}></input>
        <IoSearch className='ml-4 cursor-pointer' onClick={searchHandler}></IoSearch>
      </div>
      <div className='text-sm text-center text-red-600'>{errorMessage}</div>

      <div className='flex mx-auto my-5 lg:w-full sm:relative w-2/5 '>
        <img className='lg:w-[70%] md:w-[70%] w-[100%] mx-auto' src={`/weather_icons/${weatherData.weather[0].icon}.png`}></img>
      </div>

      <div className='lg:flex lg:flex-col justify-center'>

        <h1 className='lg:text-6xl lg:text-left lg:font-normal py-3 text-center text-7xl sm:font-semibold '><Temperature temperature={weatherData.main.temp}></Temperature><span className='text-5xl'><sup>°</sup>C</span></h1>
        <h4 className='lg:text-sm lg:text-left text-gray-700 italic text-center text-lg'>Feels Like <Temperature temperature={weatherData.main.feels_like}></Temperature><span className='text-sm'><sup>°</sup>C</span></h4>

        <div className='flex flex-row lg:justify-start lg:text-base items-center py-2 justify-center text-xl pr-10'>
          <TiWeatherWindy size="2rem" className='mr-1 text-blue-300'></TiWeatherWindy>
          <h4 className='font-semibold'>{weatherData.weather[0].main}</h4>
        </div>

      </div>

      <div className="lg:border-b-2 lg:w-full lg:h-full lg:mb-5 sm:none"></div>

      <h4 className='lg:text-sm lg:text-left py-1 text-center text-lg'>{formattedDateAndTime.date}</h4>
      <h4 className='lg:text-left lg:text-sm italic text-center text-lg'>{formattedDateAndTime.time}</h4>

      <div className='flex lg:flex-row flex-col items-center py-2 sm:text-lg'>
        <FaLocationDot size="1.3rem" className='text-left mr-5 lg:block hidden'></FaLocationDot>
        <h3 className='lg:text-left font-semibold sm:font-bold'>{weatherData.name},{weatherData.sys.country}</h3>
      </div>
    </div>
  )
}

export default CityInput
