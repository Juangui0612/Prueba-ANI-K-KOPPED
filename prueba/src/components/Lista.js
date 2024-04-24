import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

function Lista() {
  const [products, setProducts] = useState([]);
  const [seleccionadoPersonaje, setSeleccionadoPersonaje] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        setProducts(prevProducts => [...prevProducts, ...response.data.results]);
        setPage(prevPage => prevPage + 1);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
      setIsLoading(false);
    };

    fetchCharacters();
  }, [page]);

  const handleCharacterClick = async (character) => {
    try {
      const response = await axios.get(character.url);
      setSeleccionadoPersonaje(response.data);
    } catch (error) {
      console.error('Error fetching character details:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Personajes de Rick and Morty</h2>
      <ul className="character-list">
        {products.map(product => (
          <li key={product.id} className="character-item">
            <button onClick={() => handleCharacterClick(product)}>
              <img src={product.image} alt={product.name} className="character-image" />
              <div className="character-name">
                <strong>{product.name}</strong> - {product.species}
              </div>
            </button>
          </li>
        ))}
      </ul>
      {isLoading && <p>Cargando...</p>}
      {seleccionadoPersonaje && (
        <div className="selected-character-container">
          <img src={seleccionadoPersonaje.image} alt={seleccionadoPersonaje.name} className="selected-character-image" />
          <div className="selected-character-info">
            <h3>{seleccionadoPersonaje.name}</h3>
            <p>Especie: {seleccionadoPersonaje.species}</p>
            <p>Estado: {seleccionadoPersonaje.status}</p>
            <p>Género: {seleccionadoPersonaje.gender}</p>
            <div className="close-button-container">
              <button onClick={() => setSeleccionadoPersonaje(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lista;
