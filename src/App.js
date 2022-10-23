import React, { useState } from "react";
import "./App.css";

const api = {
  key: "408aab490d1822580b40a7499b56eb22",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState("");

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  const clickSearch = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
      });
  };

  const towns = ["London", "Sofia", "Frankfurt", "New York"];

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Auguts",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="container-fluid px-1 py-5 px-sm-3 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="row card0">
          <div
            className={
              typeof weather.main != "undefined"
                ? weather.main.temp > 16
                  ? "card-warm col-lg-8 col-md-7"
                  : "card-could col-lg-8 col-md-7"
                : "card-could col-lg-8 col-md-7"
            }
          >
            <small>itsweather-app.netlify.app</small>
            <div className="text-center">
              <img
                className="image mt-5"
                src="https://i.imgur.com/M8VyA2h.png"
                alt="weather-img"
              />
            </div>
            {typeof weather.main != "undefined" ? (
              <div className="row px-3 mt-3 mb-3">
                <h1 className="large-font mr-3">
                  {Math.round(weather.main.temp)}°c
                </h1>

                <div className="d-flex flex-column mr-3">
                  <h2 className="mt-3 mb-0">
                    {weather.name}, {weather.sys.country}
                  </h2>
                  <small>{dateBuilder(new Date())}</small>
                </div>
                <div className="d-flex flex-column text-center">
                  <div className="fa fa-sun-o mt-4"></div>
                  <small>{weather.weather[0].main}</small>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="card2 col-lg-4 col-md-5">
            <div className="row px-3">
              <input
                type="text"
                name="location"
                placeholder="Another location"
                className="mb-5"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
              <div
                className="fa fa-search mb-5 mr-0 text-center"
                onClick={() => clickSearch()}
              ></div>
            </div>
            <div className="mr-5">
              <p
                className="light-text suggestion"
                onClick={() => setQuery(towns[0])}
              >
                {towns[0]}
              </p>
              <p
                className="light-text suggestion"
                onClick={() => setQuery(towns[1])}
              >
                {" "}
                {towns[1]}
              </p>
              <p
                className="light-text suggestion"
                onClick={() => setQuery(towns[2])}
              >
                {" "}
                {towns[2]}
              </p>
              <p
                className="light-text suggestion"
                onClick={() => setQuery(towns[3])}
              >
                {" "}
                {towns[3]}
              </p>

              <div className="line my-5"></div>

              <p>Weather Details</p>
              <div className="row px-3">
                <p className="light-text">Wind speed:</p>
                {typeof weather.main != "undefined" ? (
                  <p className="ml-auto">{weather.wind.speed} km/h</p>
                ) : (
                  ""
                )}
              </div>
              <div className="row px-3">
                <p className="light-text">Sea level:</p>
                {typeof weather.main != "undefined" ? (
                  <p className="ml-auto">{weather.main.sea_level}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="row px-3">
                <p className="light-text">Timezone</p>
                <p className="ml-auto">{weather.timezone}</p>
              </div>
              <div className="row px-3">
                <p className="light-text">Pressure:</p>
                {typeof weather.main != "undefined" ? (
                  <p className="ml-auto">{weather.main.pressure}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="line mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
