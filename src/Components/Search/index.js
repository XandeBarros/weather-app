import React from 'react';

import { Container } from './styles.js';

export default function Search({ place, handleFetch, handleSearch }) {
  return(
    <Container>
      <input type="text" value={place} onChange={handleSearch}></input>
      <button onClick={handleFetch}> Pesquisar </button>
    </Container>
  );
}