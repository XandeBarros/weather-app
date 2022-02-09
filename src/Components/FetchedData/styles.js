import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto 2rem auto;
  height: 90%;
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const Temp = styled.div`
  display: flex;

  p {
    font-family: 'Montserrat';
    font-size: 4rem;

    align-self: start;
  }

  img {
    align-self: start;
    margin-top: 1rem;
    width: 30px;
  }
`;

export const Uv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const MoreInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div p {
    display: flex;
    align-items: center;

    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 1.5rem;
  }

  div p img {
    align-self: center;
    margin-right: 1rem;
    
    height: 30px;
  }

  div:last-child img {
    height: auto;
    width: 40px;
  }
`;

export const Condition = styled.div`
  display: flex;
`;

export const Icon = styled.span`
  width: 100px;
  height: 100px;
  background: ${({ theme }) => `url(${theme.icon})`};
  background-size: contain;
  background-repeat: no-repeat;
`;