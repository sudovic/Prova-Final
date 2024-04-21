import React, { useEffect } from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import luan from './img/luan.jpeg';

const MenuSuperior = () => {
  return (
    <div className="menu">
      <Link to="/" className="menubtn">Asteroid List</Link>
      <Link to="/sobre-mim" className="menubtn">Sobre Mim</Link>
    </div>
  );
};

const SobreMim = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Luan de oliveira Costa"; 
  }, [location]);

  return (
    <div>
      <MenuSuperior />
      <div className="container">
        <h2 className="meuNome">Luan de Oliveira Costa</h2>
        <div className="boxLuan">
          <p className="sobreLuan">
          <img src={luan} className="foto" alt="Foto de Luan" /> <br />
            Me chamo Luan, passei os últimos 15 anos da minha carreira profissional na área financeira de uma única empresa, lá foi meu primeiro emprego e continuo até hoje, mas hoje já sinto que preciso mudar, mirar em algo que eu goste, mesmo sabendo que terei grandes desafios.
            Me interessei pela área da programação desde jovem, mas nunca tomei nenhuma iniciativa. Depois de incentivar e apoiar meu primo que buscava essa área como seu futuro, acabei me reconectando com a programação e agora sim tomei o passo de aprender corretamente, por isso iniciei o curso na Tech4me e esse ano de 2024 também comecei minha jornada no curso superior de análise e desenvolvimento de sistemas. Até o momento adorei todas as tecnologias que aprendi nesse curso da Tech4me, HTML5, CSS, JAVA SCRIPT e REACT, espero aprender ainda mais na faculdade e finalmente mudar de carreira.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreMim;
