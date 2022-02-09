import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1rem;

  margin: 0 auto;

  input {
    display: inline;
    width: 20rem;
    margin: 0 auto;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: ${({ theme }) => theme.borderRadius};
    -webkit-appearance: none;
    color: #99A3BA;
    border: 1px solid #CDD9ED;
    background: #fff;
    transition: border .3s ease;
    
    &:focus {
      outline: none;
      border-color: #275EFE;
    }
  }

  button {
    width: 6rem;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-family: 'Roboto';
    font-weight: bold;
    border-radius: 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0;
    -webkit-appearance: none;
    border: 1px solid #CDD9ED;
    margin-left: -6rem;
    
    &:focus {
      outline: none;
      border-color: #275EFE;
    }
  }
`;