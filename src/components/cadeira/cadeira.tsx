import React from "react";
import "./style.css";

const Cadeira: React.FC = () => {
  return (
    <div  className="container">
      <div className="imageContainer">
        <img
          src="/kixiki.jpg"
          alt="Minha Imagem"
          className="image"
        />
      </div>
      <div className="textContainer">
        <p className="description">
        Comprou seu ingresso? Então você irá ter a chance de concorrer uma
          cadeira profissional da KIXIKI móveis. A KIXIKI está à 35 anos
          trazendo o melhor para o mercado com um compromisso com a satisfação
          do cliente, oferecendo exclusividade, qualidade e expertise.
          Proporcione ainda mais conforto e estilo para você e seus clientes.
        </p>
      </div>
    </div>
  );
};

export default Cadeira;
