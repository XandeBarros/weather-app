import styled from 'styled-components';

export const Container = styled.footer`
  position: absolute;
  top: 90vh;
  right: 10vw;

  @media(max-width: 500px) {
    top: 85vh;
    right: 5vw;
  }

  img {
    width: 3rem;
    height: 3rem;

    background: rgba(255, 255, 255, .5);

    border-radius: 50%;

    transition: .5s;
    cursor: pointer;

    &:hover {
      transform: translateY(-.5rem);
    }

  }
  
  @media(max-width: 500px) {
    img {
      &:hover {
        transform: translateY(0);
      }
    }
  }
`;