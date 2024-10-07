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
          <a href="https://wa.me/559392278870" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.png" className="whatsapp-icon" alt="WhatsApp" />
          </a>
        </div>
        <div className="Links">
          <h2>Navegação</h2>
          <ul>
            <li>
              <a href="#hero-section">Início</a>
            </li>
            <li>
              <a href="#about-section">Sobre</a>
            </li>
            <li>
              <a href="#event-overview">Informações do Evento</a>
            </li>
            <li>
              <a href="#trainings">Treinamentos</a>
            </li>
            <li>
              <a href="#event-details">O que vai ter neste Evento?</a>
            </li>
                    </ul>
        </div>
        <div className="logo">
          <img src="/logo-dark.png" alt="Logo da Empresa" />
          <br></br>
          <img src="/belissima-dark.png" alt="Logo Belíssima Cosméticos" />
        </div>
      </div>
      <div className="copy">
        &copy; {currentYear} Belíssima Cosméticos. Todos os direitos reservados.
      </div>

      <img className='whatsapp-button' src="/whatsapp-icon.png" alt="WhatsApp" onClick={
        () => window.open('https://wa.me/559392278870', '_blank')
      } />
    </section>
  );
};

export default Footer;
