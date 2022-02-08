import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto;

  display: flex;

  padding: 2rem;  
  background: #ccc;

  font-size: 1rem;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Temp = styled.div`
  display: flex;
`;

export const Uv = styled.div`
  display: flex;
`;

export const MoreInfo = styled.div`
  display: flex;
`;

export const Condition = styled.div`
  h2 {
    display: inline-block;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
  }
`;