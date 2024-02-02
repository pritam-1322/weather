import './App.css'
import CityInput from './components/CityInput'
import Highlight from './components/Highlight';
import useWeatherData from './hooks/useWeatherData';


import { useState,useEffect } from 'react';
import Loader from './components/Loader';
function App() {
  useWeatherData();

  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3500)
    }, [])
    if (loading) {
        return <Loader/>
    }
  return (
    <>
    <div className='flex  gap-8 flex-col lg:flex-row'>
      <div className='flex'><CityInput></CityInput></div>
      <div className='lg:w-2/3 flex justify-center items-center  relative'><Highlight></Highlight></div>
    </div>
    
    </>
    
  
    
  )
}

export default App
