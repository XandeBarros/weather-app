import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import themes from './styles/themes';

import Header from './Components/Header';
import Search from './Components/Search';
import Subtitle from './Components/Subtitle';
import FetchedData from './Components/FetchedData';
import Footer from './Components/Footer';

import { Container } from './Helpers/Container/styles.js';

export default function App() {
  const [place, setPlace] = useState('Brasília');
  const [placeInfo, setPlaceInfo] = useState({});

  function handleSearch(e) {
    setPlace(e.target.value);
  }

  function handleFetch() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${place}&days=1&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => 
      setPlaceInfo({
        location: {
          name: data.location.name,
          region: data.location.region,
          country: data.location.country,
        },
        current: {
          feelslike: data.current.feelslike_c,
          temp: data.current.temp_c,
          uv: data.current.uv,
          condition: data.current.condition.text,
          conditionCode: data.current.condition.code, 
          conditionIcon: data.current.condition.icon, 
        },
        forecast: {
          max_temp: data.forecast.forecastday[0].day.maxtemp_c,
          min_temp: data.forecast.forecastday[0].day.mintemp_c,
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
        } 
      }
    ));
  }

  return (
    <ThemeProvider theme={{...themes, code: Object.keys(placeInfo).length === 0 ? '0000' : placeInfo.current.conditionCode, icon: Object.keys(placeInfo).length === 0 ? null : placeInfo.current.conditionIcon.replace('64x64', '128x128')}}>
      <GlobalStyle />
      <Container>
        <Header />
        <Search place={place} handleFetch={handleFetch} handleSearch={handleSearch} />
        {Object.keys(placeInfo).length === 0
          ? 
          <Subtitle subtitle='Pesquise...' />
          : 
          <FetchedData placeInfo={placeInfo} />
        }
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
