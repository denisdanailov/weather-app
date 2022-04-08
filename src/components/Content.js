import React, { useState }from "react";
import Device from "./Device";


const api = {
  key: "408aab490d1822580b40a7499b56eb22",
  base: "https://api.openweathermap.org/data/2.5/"
}

export function Content()  {
  
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState('');



  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  return (
   <div className="appec">
    <div className="content">
    <h1>Check the weather around the world </h1>
      <p>
By weather information, you can prepare your plan carefully, you will be successful at work and have better life. The application is very helpful with everybody.
      </p>
      <div className="search-box">
      <input className="search" 
       type="text"
       placeholder="Search..."
       onChange={e => setQuery(e.target.value)}
       value={query}
       onKeyPress={search}
      />
      </div>
    </div>
      <div className="device">
      <Device weather={weather} />
      </div>
   </div>
  );
}

export default Content;
