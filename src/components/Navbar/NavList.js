import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul>
      <li>
        <Link to="/">
          <TiWeatherSunny color="#3c4357" size="2rem" />
        </Link>
      </li>
      <li>
        <Link to="/">WeatherApp</Link>
      </li>
      <li>
      <Link to="/map">Map</Link>
      </li>
    </ul>
  );
}

export default NavList;
