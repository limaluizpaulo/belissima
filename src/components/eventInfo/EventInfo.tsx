"use client";
import React from "react";
import "./styles.css";

export default function EventInfo() {
  return (
    <div className="event-info-container" id="event-overview" >
      <h1 className="event-title">Garden Day será um marco na sua carreira</h1>
      <p className="event-subtitle">
        Prepare-se para 2025: descubra as tendências que podem impulsionar sua
        carreira para o próximo nível.
      </p>
      <p className="event-bonus-text">
        Na compra do ingresso, você ganha um bônus incrível!
      </p>

      <div className="event-benefits">
        <div className="benefits-left">
          <ul>
            <li className="list">
              <img src="/marca-de-verificacao.png"  alt="Ícone de tique" /> Um kit home care
            </li>
            <li>
              <img src="/marca-de-verificacao.png"  alt="Ícone de tique" /> Orientação de quem já alcançou o sucesso
            </li>
            <li>
              <img src="/marca-de-verificacao.png"  alt="Ícone de tique" /> Acesso aos produtos mais inovadores do mercado
            </li>
          </ul>
        </div>

        <div className="benefits-right">
          <ul>
          <li>
            <img src="/marca-de-verificacao.png" alt="Ícone de tique" /> Coffee Break
            </li>
            <li>
            <img src="/marca-de-verificacao.png"  alt="Ícone de tique" /> Certificado de participação
            </li>
            <li>
            <img src="/marca-de-verificacao.png"  alt="Ícone de tique" /> Principais tendências de 2025
            </li>
            <li>
            <img src="/marca-de-verificacao.png" alt="Ícone de tique" /> Concorra a uma cadeira profissional
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
