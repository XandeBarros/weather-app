import React from 'react';

import { Container, Location, Temp, Uv, MoreInfo, Condition } from './styles';

export default function FetchedData({ placeInfo }) {
  return(
    <Container>
      <Location>
        <h2>{placeInfo.location.name}, {placeInfo.location.country}</h2>
        <h2>{placeInfo.location.region}</h2>
      </Location>
      <Temp>
        <h2>{placeInfo.current.temp}</h2>
      </Temp>
      <Uv>
        <p>Sensação: {placeInfo.current.feelslike}</p>
        <p>UV index: {placeInfo.current.uv}</p>
      </Uv>
      <MoreInfo>
        <p>Máxima: {placeInfo.forecast.max_temp}</p>
        <p>Mínima: {placeInfo.forecast.min_temp}</p>
        <p>Nascente: {placeInfo.forecast.sunrise}</p>
        <p>Poente: {placeInfo.forecast.sunset}</p>
      </MoreInfo>
      <Condition>
        <h2>{placeInfo.current.condition}</h2>
        <h2>{placeInfo.current.conditionCode}</h2>
      </Condition>
    </Container>
  );
}
