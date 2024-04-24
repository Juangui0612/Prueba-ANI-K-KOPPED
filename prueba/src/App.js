import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Lista from "./components/Lista";
import Descripcion from './components/Descripcion';
import './App.css'
function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = async (url) => {
    try {
      const response = await axios.get(url);
      setCharacters(response.data.results);
      setInfo(response.data.info);
    } catch (error) {
      console.log("Error fetching characters:", error);
    }
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <BrowserRouter> 
      <div className="App">
        <header className="App-header">
          <h1>Bienvenidos, por favor seleccione un boton:</h1>
          <nav>
            <Link to="/PRO">
              <button>Ver Lista</button>
            </Link>
            <Link to="/YO">
              <button>Ver Descripción</button>
            </Link>
          </nav>
          <Routes> 
            <Route path="/PRO" element={<Lista characters={characters} />} /> 
            <Route path="/YO" element={<Descripcion characters={characters} />} /> 
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
