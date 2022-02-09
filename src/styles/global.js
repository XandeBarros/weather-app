import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    padding: 2rem;
    background-image: ${({ theme }) => Number(theme.code) === 0 ? 
      'linear-gradient(135deg, #9871F5, #6842C2)' : Number(theme.code) === 1000 ?
      'linear-gradient(135deg, rgb(255,220,26), rgb(254,174,67))' : Number(theme.code) >= 1003 && Number(theme.code) <= 1006 ?
      'linear-gradient(135deg, rgb(243,31,116), rgb(159,32,95))' : Number(theme.code) >= 1009 && Number(theme.code) <= 1063 ?
      'linear-gradient(135deg, rgb(146,39,143), rgb(102,46,146))' : Number(theme.code) >= 1066 && Number(theme.code) <= 1171 ?
      'linear-gradient(135deg, rgb(55,203,248), rgb(12,147,207))' : Number(theme.code) >= 1180 && Number(theme.code) <= 1195 ?
      'linear-gradient(135deg, rgb(229,234,232), rgb(149,149,149))' : Number(theme.code) >= 1201 && Number(theme.code) <= 1237 ?
      'linear-gradient(135deg, rgb(55,203,248), rgb(12,147,207))' : Number(theme.code) >= 1240 && Number(theme.code) <= 1246 ?
      'linear-gradient(135deg, rgb(229,234,232), rgb(149,149,149))' : Number(theme.code) >= 1249 && Number(theme.code) <= 1264 ?
      'linear-gradient(135deg, rgb(55,203,248), rgb(12,147,207))' : Number(theme.code) >= 1273 && Number(theme.code) <= 1282 ?
      'linear-gradient(135deg, rgb(229,234,232), rgb(149,149,149))' : 'linear-gradient(135deg, #9871F5, #6842C2)'
    };
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;

    @media(max-width: 500px) {
      width: 100vw;
      height: 100vh;
      padding: 0;
    } 
  }
`;