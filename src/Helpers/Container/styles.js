import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto;

  display: flex;
  flex-direction: column;

  padding:  ${({ theme }) => theme.spacing.medium};
  width: 35vw;
  min-width: 25rem;
  height: 90vh;  

  border-radius:  ${({ theme }) => theme.borderRadius};

  background: rgba(255, 255, 255, .5);

  font-size: 1rem;

  @media(max-width: 500px) {
    width: 80vw;
    height: 90vh;
  }
`;