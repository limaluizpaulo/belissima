"use cliente";
import React from "react";
import "./styles.css";

export default function MainSection() {
  return (
    <div className="main-container" id="hero-section" >
      <div className="content">
        <img src="/logo-dark.png" alt="Logo do Evento" className="logo" />
        <p className="main-description">
          Se você é um profissional da beleza que busca expandir seus conhecimentos e estar à frente das tendências, o <strong>Garden Day</strong> é o evento perfeito para você! Descubra as tendências de 2025 e aprofunde-se em técnicas inovadoras como:
        </p>
        <p className="highlighted-techniques">
          <span className="main-description" style={{ fontWeight: 'bold' }}>
            <span  className="main-description" style={{ marginRight: '8px' }}>•</span>
            Colometria, Lisoterapia, Tricologia, Terapia Capilar, Gestão de salão
          </span>
        </p>
        <p className="main-description">E muito mais!</p>
        <br />
        <video className="main-video" controls>
          <source src="/gardenday.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <a
          href="https://wa.me/559392278870"
          target="_blank"
          rel="noopener noreferrer"
          className="participate-button"
        >
          Quero me inscrever
        </a>
        
      </div>
    </div>
  );
}
