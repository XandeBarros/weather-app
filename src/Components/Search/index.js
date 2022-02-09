import React, { useEffect } from 'react';

import { Container } from './styles.js';

export default function Search({ place, handleFetch, handleSearch }) {
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleFetch();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  return(
    <Container>
      <input type="text" value={place} onChange={handleSearch}></input>
      <button onClick={handleFetch}> Pesquisar </button>
    </Container>
  );
}