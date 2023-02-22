import React, { useState, useEffect } from "react";

const API_KEY = "494acf1a670d397f44364e60c3bc46bd";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Casablanca,MA&appid=${API_KEY}`;

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error(error));
  }, []);
  console.log(weatherData)
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weather for Casablanca, Morocco</h1>
      {/* <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}&deg;C</p> */}
      {/* <p>Humidity: {weatherData.main.humidity}%</p> */}
      {/* <p>Weather: {weatherData.weather[0].description}</p> */}
    </div>
  );
}

export default App;

// ------ WORKING ----

// import { useState, useEffect } from "react";

// function App() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [locationName, setLocationName] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://thingproxy.freeboard.io/fetch/https://api.meteo.lt/v1/places/alytus/forecasts/long-term"
//         );
//         const data = await response.json();
//         setWeatherData(data.forecastTimestamps);
//         setLocationName(data.place.name);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {locationName && <h1>Weather forecast for {locationName}</h1>}
//       {weatherData ? (
//         <ul>
//           {weatherData.map((item) => (
//             <li key={item.forecastTimeUtc}>{item.forecastTimeUtc} : {item.airTemperature}°C</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading weather data...</p>
//       )}
//     </div>
//   );
// }

// export default App;

// ---------- End -------

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const MyComponent = () => {
//   const [ipAddress, setIpAddress] = useState("");

//   useEffect(() => {
//     const fetchIpAddress = async () => {
//       const response = await axios.get("https://api.ipify.org/?format=json");
//       setIpAddress(response.data.ip);
//     };
//     fetchIpAddress();
//   }, []);
//   console.log("ip"+ipAddress)


//   return <div>My IP address is: {ipAddress}</div>;
// };

// export default MyComponent;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const App = () => {
// //   const [data, setData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const options = {
// //       method: 'GET',
// //       url: 'https://meteostat.p.rapidapi.com/stations/hourly',
// //       params: {station: '10637', start: '2020-01-01', end: '2020-01-01', tz: 'Europe/Berlin'},
// //       headers: {
// //         'X-RapidAPI-Key': '4d88e7b760mshcb585cbd07fe976p1d983cjsn71cdafb31797',
// //         'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
// //       }
// //     };
    
// //     axios.request(options).then(function (response) {
// //       console.log(response.data);
// //     }).catch(function (error) {
// //       console.error(error);
// //     });
// //     // const fetchData = async () => {
// //     //   try {
// //     //     const response = await axios.get(
// //     //       'https://api.meteostat.net/v2/ip',
// //     //       {
// //     //         params: {
// //     //           key: 'YOUR_API_KEY',
// //     //           ip: 'YOUR_IP_ADDRESS'
// //     //         }
// //     //       }
// //     //     );
// //     //     setData(response.data);
// //     //   } catch (error) {
// //     //     setError(error.message);
// //     //   }
// //     //   setLoading(false);
// //     // };
// //     // fetchData();
// //   }, []);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error: {error}</p>;
// //   if (!data) return null;

// //   return (
// //     <div>
// //       <h2>Current Weather for {data.city.name}, {data.city.region}</h2>
// //       <p>Temperature: {data.data.temperature}</p>
// //       <p>Humidity: {data.data.humidity}</p>
// //       <p>Wind Speed: {data.data.wind_speed}</p>
// //     </div>
// //   );
// // };

// // export default App;
