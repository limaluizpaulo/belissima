'use client'
import React from 'react';
import './style.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="section">
    <div className="footer">
      <div className="socialMedia">
        <h2>Redes Sociais</h2>
        <a href="https://www.facebook.com/enecir.valearraiss">
          <img src="/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/belissima_cosmeticos_atm/">
          <img src="/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@GardenHairCosmeticos">
          <img src="/youtube.png" alt="Youtube" /> 
        </a>
     
      <a href="https://wa.me/559392278870"  target="_blank">
      <img src="/whatsapp.png" className="whatsapp-icon" />
          </a>
      </div>
      <div className="Links">
      <h2>Informações</h2>
        <ul>
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#beneficios">Benefícios</a>
          </li>
          <li>
            <a href="#nossos-produtos">Nossos Produtos</a>
          </li>
          <li>
            <a href="#sobre-mim">Sobre Mim</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src="/logo.png" alt="Logo da Empresa" />
        <img src="/belissima.png" alt="" />
      </div>
      </div>
      <div className="copy">
        &copy; {currentYear}
      </div>
    
    </section>
  );
};

export default Footer;
