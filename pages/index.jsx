import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "../components/home/hero";
import ImagesAPI from "../components/home/images";
import Weather from "../components/home/weather";

export default function Home() {
  const [cities, setCities] = useState();

  const [city, setCity] = useState("Sweden");

  const handleClick = (name) => {
    setCity(name);
  };

  const [weather, setWeather] = useState();

 useEffect(() => {
    fetch(
      // `http://api.weatherstack.com/current?access_key=0fd8ae9d5247af3922b8324c7aeac035&query=${city}`
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=096953acd54699816b2ef8b2a381a161`

    )
      .then((res) => res.json())
      .then((res) => {
        setWeather(res);
      })
      .catch((err) => console.error(err));
    console.log(weather);
  }, [city]);

  // useEffect(() => {
  //   fetch("https://countriesnow.space/api/v0.1/countries/capital/")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setCities(res);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // console.log(cities);
  

  if (!weather) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Weather onClick={handleClick} city={cities} weather={weather} />
      </main>
    </div>
  );
}
