import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto;

  display: flex;
  flex-direction: column;

  padding:  ${({ theme }) => theme.spacing.medium};
  width: 90vw;
  height: 80vh;  

  border-radius:  ${({ theme }) => theme.borderRadius};

  background: rgba(125, 125,125, .5);

  font-size: 1rem;
`;