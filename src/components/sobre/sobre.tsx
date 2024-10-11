import React from "react";
import "./style.css";

const Sobre: React.FC = () => {
  return (
    <div  className="container">
      <div className="imageContainer">
        <img
          src="/logo.png"
          alt="Minha Imagem"
          className="image"
        />
      </div>
      <div className="textContainer">
        {/* <h1 className='title'>Oi, <br></br> Sou Enecir</h1> */}
        <p className="description">
          Este é o momento de investir na sua carreira, adquirir novas
          habilidades e se destacar no mercado. Garanta já o seu ingresso e
          venha fazer parte de uma nova era no mundo da beleza.
          <strong> Não perca essa oportunidade de transformação! </strong>
        </p>
      </div>
    </div>
  );
};

export default Sobre;
