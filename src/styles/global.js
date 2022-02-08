import { createGlobalStyle } from 'styled-components';

import clear from '../assets/clear.jpg';
import snow from '../assets/snow.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    padding: 2rem;
    background-image: ${({ theme }) => theme.code === '0000' ? `url(${clear})` : `url(${snow})`};
    background-repeat: no-repeat;
    background-size: cover;
  }
`;