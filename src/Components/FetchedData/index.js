import React from 'react';

import { Container, Location, Temp, Uv, MoreInfo, Condition, Icon } from './styles';
import max from '../../assets/icons/direction-up.png';
import min from '../../assets/icons/direction-down.png';
import celsius from '../../assets/icons/celsius.png';
import sunrise from '../../assets/icons/sunrise.png';
import sunset from '../../assets/icons/sunset.png';

export default function FetchedData({ placeInfo }) {
  return(
    <Container>
      <Location>
        <h2>{placeInfo.location.name}, {placeInfo.location.country}</h2>
        <h2>{placeInfo.location.region}</h2>
      </Location>
      <Temp>
        <p>{placeInfo.current.temp}</p>
        <img src={celsius}/>
      </Temp>
      <Icon />
      <Uv>
        <p>Sensação: {placeInfo.current.feelslike}°</p>
        <p>UV index: {placeInfo.current.uv}</p>
      </Uv>
      <MoreInfo>
        <div>
          <p><img src={max} /> {placeInfo.forecast.max_temp}°</p>
          <p><img src={min} /> {placeInfo.forecast.min_temp}°</p>
        </div>
        <div>
          <p><img src={sunrise} /> {placeInfo.forecast.sunrise}</p>
          <p><img src={sunset} /> {placeInfo.forecast.sunset}</p>
        </div>
      </MoreInfo>
      <Condition>
        <h2>{placeInfo.current.condition}</h2>
      </Condition>
    </Container>
  );
}
