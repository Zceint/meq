import React, { useRef } from "react";
import axios from "axios";

export default function Header(props) {
  const searchRef = useRef();
  const showWeather = () => {
    const city = searchRef.current.value;
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=c717ab506269416bab9231151220103&q=${city}&day=3&aqi=no&alerts=no`
      )
      .then(
        (res) => {
          console.log(res.data);
          props.setWeather(res.data.forecast.forecastday[0].hour);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  return (
    <section>
      <h3>Weather Forecast App</h3>
      <div>
        <select name="weather" id="weather" ref={searchRef}>
          <option value="Sydney">Sydney</option>
          <option value="Warsaw">Warsaw</option>
          <option value="Hong Kong">Hong Kong</option>
        </select>
        <button onClick={showWeather}>Show</button>
      </div>
    </section>
  );
}
