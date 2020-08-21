import React from "react";
import { FiWind } from "react-icons/fi";

function CardTemp(props) {
  return (
    <div className="card-temp">
      <h3 className="temp-item">{props.temp}°C</h3>
      <img
        src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt=""
      />
      <h5 className="description">{props.description}</h5>
      <ul className="list">
        <li>Min: {props.maxtemp}°C</li>
        <li>
          Maximum temperature:
          {props.mintemp}°C
        </li>
        <li> Feels like:{props.feelslike}°C</li>
        <li> Pressure {props.pressure}</li>
        <li>
          <FiWind />
          {props.windspeed}
        </li>
      </ul>
    </div>
  );
}

export default CardTemp;
