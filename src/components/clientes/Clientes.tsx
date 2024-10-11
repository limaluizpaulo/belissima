"use client";
import "./style.css";

const Clientes: React.FC = () => {
  return (
    <section id="trainings" className="clientes">
      <h1 className="titulo-clientes">Garden Day</h1>
      <div className="descricao-evento">
        <p>
          O Garden Day é um evento anual exclusivo da Garden Hair Cosméticos.
          Acontece nas principais cidades onde a Garden Hair se faz presente,
          como Caruaru-PE, Blumenau-SC, Rio de Janeiro, Belém-PA, Salvador-BA
          entre outras. A Garden Hair também está em mais 22 países, e o Garden
          Day já se tornou um evento anual em Portugal. 🇵🇹
          <br />
          <br /> O último Garden Day aconteceu em Guarulhos-SP e agora chegou a vez de Altamira-PA. O vídeo ao lado mostra o desfile do  evento em Guarulhos-SP.
          
          
        </p>
        <div className="lista-clientes">
          <img src="/treinamentos2.jpeg" alt="Cliente 1" />
          <img src="/treinamentos3.jpeg" alt="Cliente 2" />
        </div>
        <div className="botoes-compra">
          <a
            href="https://wa.me/559392278870"
            target="_blank"
            rel="noopener noreferrer"
            className="participate-button"
          >
            Comprar Agora
          </a>
        </div>
      </div>

      <div className="video-container">
        <video  controls>
          <source src="/garday-guarulhos.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </section>
  );
};

export default Clientes;
