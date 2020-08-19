import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import { Container } from "./components/Container/Container";
import { Heading } from "./components/Heading/Heading";
import { Card, CardError } from "./components/Card/Card";
import { Search } from "./components/Search/Search";
import { TiWeatherSunny } from "react-icons/ti";
import { FiWind } from "react-icons/fi";
import {
  FaTemperatureLow,
  FaSearchLocation,
  FaTemperatureHigh,
} from "react-icons/fa";

function App() {
  const [city, setCity] = useState(() => {
    try {
      const item = localStorage.getItem("city");
      return item ? item : "nis";
    } catch (error) {
      console.log(error);
      return "nis";
    }
  });
  const [storage, setStorage] = useState(false);
  const [data, setData] = useState({});
  const inputRef = useRef();


  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2db0365e434f4e9d976e5e5e8932957d`
      )
      .then((res) => {
        setData({
          city: res.data.name,
          countryCode: res.data.sys.country,
          temperature: res.data.main.temp,
          temperatureMin: res.data.main.temp_min,
          temperatureMax: res.data.main.temp_max,
          feelsLike: res.data.main.feels_like,
          pressure: res.data.main.pressure,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
          windSpeed: res.data.wind.speed,
        });
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {};
  }, [storage]);

  const changeCity = () => {
    localStorage.setItem("city", city.toString());
    setStorage(true);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

const focus = () => {
inputRef.current.focus();
}

  return (
    <div className="App">
      <Heading>
        <ul>
          <li>
            <TiWeatherSunny color="#3c4357" size="2rem" />
          </li>
          <li>WeatherApp</li>
        </ul>
        <form onSubmit={changeCity}>
          <Search>
            <FaSearchLocation onClick={focus} className="icon" size="1rem" color="#4f4f4f" />
            <input ref={inputRef}
              onKeyUp={updateCity}
              type="text"
              placeholder="Enter the name of the city"
            />
          </Search>
        </form>
      </Heading>
      <Container>
        {data.temperature ? (
          <Card>
            <div className="card-header">
              <h2>
                {data.city}, {data.countryCode}
              </h2>
              <img
                src={`https://countryflags.io/${data.countryCode}/flat/32.png`}
              />
            </div>
            <div className="card-temp">
              <h3 className="temp-item">{(data.temperature).toFixed(0)}°C</h3>
              <img
                src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
              />
              <h5 className="description">{data.description}</h5>
              <ul className="list">
                <li>Min: {(data.temperatureMin).toFixed(0) }°C</li>
                <li>
                  Maximum temperature:
                  {(data.temperatureMax.toFixed(0) )}°C
                </li>
                <li> Feels like:{(data.feelsLike).toFixed(0)}°C</li>
                <li> Pressure {data.pressure}</li>
                <li>
                  <FiWind />
                  {data.windSpeed}
                </li>
              </ul>
            </div>
          </Card>
        ) : (
          <CardError>
          <p>Enter the correct name of the city</p>
          </CardError>
        )}
      </Container>
    </div>
  );
}

export default App;
