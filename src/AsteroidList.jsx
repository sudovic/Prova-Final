import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import './style.css';


const AsteroidList = () => {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    fetchAsteroids();
  }, []);

  const fetchAsteroids = async () => {
    const apiKey = 'eBHz84yxmTQ2uLzqbN9IoPtjHA1bb1uJ1KWi4ajR';
    const dataAtual = new Date().toISOString().split('T')[0];
    try {
      const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataAtual}&end_date=${dataAtual}&api_key=${apiKey}`);
      const asteroidData = Object.values(response.data.near_earth_objects).flat();
      setAsteroids(asteroidData);
    } catch (error) {
      console.error('Error fetching asteroids:', error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const MenuSuperior = () => {
    return (
      
      <div className="menu">
        <Link to="/" className="menubtn">Asteroid List</Link>
        <Link to="/sobre-mim" className="menubtn">Sobre Mim</Link>
      </div>
    );
  };

  useEffect(() => {
    document.title = "Lista de Asteroides"; 
  }, [location]);

  return (
    
<div>
  <MenuSuperior />
      <div className="container">
        <div className="box">
          <div>
            <h1>Lista de Asteroides</h1>
            <ul>
              {asteroids.map(asteroid => (
                <li key={asteroid.id}>
                  <Link to={`/asteroide/${asteroid.id}`}>
                    <div>Nome: {asteroid.name}</div>
                    <div>É Potencialmente perigoso? {asteroid.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}</div>
                    <div>Diâmetro Máximo Estimado (Km): {asteroid.estimated_diameter.kilometers.estimated_diameter_max}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Botão flutuante */}
        <button className="scroll-to-top" onClick={scrollToTop}>Voltar ao Topo</button>
      </div>
    </div>
  );
};

export default AsteroidList;
