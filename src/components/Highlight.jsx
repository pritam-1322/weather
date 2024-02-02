import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';
import Temperature from './Temperature';
const Highlight = () => {
    const weatherData = useSelector(store => store.weatherDetails.currentWeather);
    if (!weatherData) return;
function formatDateAndTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleTimeString('en-US', optionsTime);
}
const sunrise = formatDateAndTime(weatherData.sys.sunrise);
const sunset = formatDateAndTime(weatherData.sys.sunset);

  return (
    <div className='flex flex-col items-center lg:w-screen w-11/12 py-10'>
        <h1 className='font-bold lg:text-xl lg:underline-offset-8 pb-4 text-3xl underline'>Highlights</h1>
        <div className='grid lg:grid-cols-3 lg:w-11/12 grid-cols-2 gap-4 px-3 py-5 shadow-lg shadow-blue-200 w-11/12 rounded-xl flex-wrap'>
        <Card className="flex flex-col justify-center items-center border col-span-1 rounded-2xl py-2 ">
        <div className="sm:text-sm">Humidity</div>
        <img src="/weather_icons/humidity.png" width={100} alt="" />
        <div className="flex-row flex">
            <h1>{weatherData?.main?.humidity}</h1>
            <span>%</span>
        </div>
        </Card>
        <Card className="flex flex-col justify-center items-center border col-span-1 rounded-2xl py-2 ">
        <div className="h-title sm:text-sm">Wind Speed</div>
          <img
            src={`/weather_icons/wind-day.png`}
            width={100}
            alt="wind icon"
          />
          <div className="flex flex-row">
            <h1>{weatherData?.wind?.speed?.toFixed(1)}</h1>
            <span>m/s</span>
          </div>
        </Card>
        <Card className="flex flex-col justify-center items-center border col-span-1 rounded-2xl py-2 ">
        <div className="h-title sm:text-sm">Clouds</div>
          <img src="/weather_icons/clouds.png" width={100} alt="" />

          <div className="flex flex-row">
            <h1> {weatherData?.clouds?.all}</h1>
            <span>%</span>
          </div>
        </Card>
        <Card className="flex flex-col justify-center items-center border col-span-1 rounded-2xl py-2 ">
        <div className="h-title sm:text-sm">Pressure</div>
          <img src="/weather_icons/pressure.png" width={100} alt="" />

          <div className="flex flex-row items-center">
            <h1>{weatherData.main.pressure} <span className='text-xs text-gray-600 '> hPa</span></h1>
          </div>
        </Card>
        <Card className="flex flex-col justify-center items-center border col-span-1 rounded-2xl py-2 ">
        <div className="sun-info flex flex-row items-center py-3">
            <img src="/weather_icons/sunrise.png" width={50} alt="" />
            <div className='flex flex-col '>
              {/* {formatter.format(new Date(current.sunrise * 1000))} */}
              {sunrise}
              <span>Sunrise</span>
            </div>
          </div>
          <div className="sun-info flex flex-row items-center">
            <img src="/weather_icons/sunset.png" width={50} alt="" />
            <div className='flex flex-col '>
                {sunset}
              {/* {formatter.format(new Date(current.sunset * 1000))} */}
              <span>Sunset</span>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col justify-center items-center border col-span-1 rounded-2xl py-2 ">
        <div className="h-title sm:text-sm">Min & Max Temp.</div>
          <img src="/weather_icons/uv.png" width={100} alt="" />
          <div className='flex flex-row items-center'>
          <Temperature temperature={weatherData.main.temp_min}></Temperature><span className='text-sm'><sup>°</sup>C</span>
          <span className='px-3'>&</span>
          <Temperature temperature={weatherData.main.temp_max}></Temperature><span className='text-sm'><sup>°</sup>C</span>
          </div>
        </Card>
        </div>
    </div>
  )
}

export default Highlight