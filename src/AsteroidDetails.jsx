import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'; 
import './style.css';


const AsteroidDetails = () => {
  const { id } = useParams();
  const [asteroid, setAsteroid] = useState(null);

  useEffect(() => {
    fetchAsteroid();
  }, [id]);

  const fetchAsteroid = async () => {
    const apiKey = 'eBHz84yxmTQ2uLzqbN9IoPtjHA1bb1uJ1KWi4ajR';
    try {
      const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${apiKey}`);
      setAsteroid(response.data);
    } catch (error) {
      console.error('Error fetching asteroid details:', error);
    }
  };

  if (!asteroid) {
    return <div>Loading...</div>;
  }

  return (
  
    <div className="containerdetail">
      <div className="box">
       <div className='detailtxt'>
          <h2>Detalhes do Asteroide</h2>
          <div>Nome: {asteroid.name}</div>
          <div>É Potencialmente perigoso?  {asteroid.is_potentially_hazardous_asteroid ? 'sim' : 'Não'}</div>
          <div>Diâmetro Maximo estimado (Km) {asteroid.estimated_diameter.kilometers.estimated_diameter_max}</div>
          <div>Velocidade Relativa: {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</div>
          <div>Magnitude Abosoluta: {asteroid.absolute_magnitude_h}</div>
          
          <Link to="/" className='btnback'>Voltar para Lista</Link>
        </div>
      </div>
    </div>
  
  );
};

export default AsteroidDetails;
