import { useEffect, useState } from "react";
import Image from "next/image";
import timeS from "../../public/pics/timeS.png";
import hum from "../../public/pics/hum.png"
import wind from "../../public/pics/wind.png"
import time from "../../public/pics/time.png"
const Weather = ({ city, weather, onClick }) => {
  const [selectedCity, setSelectedCity] = useState()
  // 

  return (
    
    <div className="btn">
      <div className="weather">
        <div className="city">
          <div className="name">
            <h1>{(weather.name)}</h1>
            <div className="">

              <h3>{(weather.weather[0].description)}</h3></div>
          </div>
          <br />
          <br />

        </div>
        <div className="icon">
          <div className="">
          <Image src={timeS} width={50} height={50}/>
            <br />
            {(weather.main.temp)}</div>
          <div className="">
          <Image src={time} width={50} height={50}/>
              <br/>
            {(weather.timezone)}</div>
          <div className="">
          <Image src={wind} width={50} height={50}/>
            <br />
            {(weather.wind.speed)}</div>
          <div className="">
          <Image src={hum} width={50} height={50}/>
            <br />

            {(weather.main.humidity)}</div>
        </div>



      </div>

      <br></br>
      <section id="info">
        <div className="enterInput">
          {/* <div className="thW">
          <h1 >The weather</h1> */}
          {/* </div>
         */}

          <input type="text" name="txt" placeholder="Enter the name of city"

            onKeyDown={e => {
              if (e.key === 'Enter') {
                console.log(e.target.value)
                onClick(e.target.value)

              }
            }}>
          </input>
        </div>

      </section>
    </div>
  );
};

export default Weather;
