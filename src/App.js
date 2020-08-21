import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Map from "./Map";
import Home from "./components/Home/Home";

import Navbar from "./components/Navbar/Navbar";

function App() {

  const checkLocalStorage = () => {
    const locStorage = localStorage.getItem("city");
    if (locStorage === "") {
      return "nis";
    } else {
      return locStorage;
    }
  };

  const [city, setCity] = useState(checkLocalStorage);
  const [storage, setStorage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2db0365e434f4e9d976e5e5e8932957d`
      )
      .then((res) => {
        setLoading(false);
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
        setLoading(false);
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

  return (
    <div className="App">
      <Router>
        <Navbar changeCity={changeCity} updateCity={updateCity} />
        <Route path="/map" exact component={Map} />
        <Route path="/" exact>
        <Home data={data} loading={loading}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
