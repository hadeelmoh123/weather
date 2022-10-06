import { useEffect, useState } from "react";

const Weather = ({ city, weather, onClick }) => {
  const [selectedCity, setSelectedCity] = useState()
// 

  return (
    <div>
      <div className="weather">
        <input type="text" name="txt" 

onKeyDown={e =>  {
  if (e.key === 'Enter') {
    console.log(e.target.value)
    onClick(e.target.value)
    
  } 
}}>

          
        </input>
        <button type="submit" onChange={() => onClick()}>enter</button>

       {/* {city.data.map((city, key) => {
          return (
            <div key={key} onClick={() => onClick(city.name)}>
              {city.name}
            </div>
          );
        })} */}
      </div>
      {/* {weather && weather.cod|| (weather.success || weather.success==undefined ) ?  <div className="">{(weather.main.temp)}</div> : <h1>Loading.....</h1>} */}
      <div className="">{(weather.main.temp)}</div>
      <div className="">{(weather.weather[0].description)}</div>

    </div>
  );
};

export default Weather;
