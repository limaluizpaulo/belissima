"use client";
import React from "react";
import { FaClipboardList, FaCut, FaSprayCan, FaPalette, FaChartLine, FaUserTie } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi"; 
import "./styles.css";

export default function EventDetails() {
  return (
    <div id="event-details" className="event-details-container">
      <h1 className="event-details-title">
      Saiba quais técnicas e conhecimentos inovadores você vai dominar ao participar, garantindo seu ingresso.
      </h1>
      <div className="event-details-content">
        <div className="details-left">
          <div className="detail-item">
            <h2 className="detail-title">
              <FaClipboardList /> Gestão de Salão
            </h2>
            <p className="detail-text">
              Aprenda a otimizar a gestão do seu salão com técnicas práticas e comprovadas, e veja seus lucros crescerem.
            </p>
          </div>
          <div className="detail-item">
            <h2 className="detail-title">
              <FaCut /> Loiro e Liso
            </h2>
            <p className="detail-text">
              Domine a arte de combinar loiro e liso em um só procedimento, proporcionando resultados impecáveis em menos tempo.
            </p>
          </div>
          <div className="detail-item">
            <h2 className="detail-title">
              <FaSprayCan /> Cachoterapia
            </h2>
            <p className="detail-text">
              Aprimore suas habilidades com técnicas exclusivas para cachos, oferecendo tratamentos personalizados e resultados impressionantes.
            </p>
          </div>
        </div>

        <div className="details-right">
          <div className="detail-item">
            <h2 className="detail-title">
              <FaPalette /> Colorimetria
            </h2>
            <p className="detail-text">
              Descubra como oferecer atendimentos personalizados com a colorimetria cromática, garantindo resultados incríveis e clientes fiéis.
            </p>
          </div>
          <div className="detail-item">
            <h2 className="detail-title">
              <FaChartLine /> Tendências
            </h2>
            <p className="detail-text">
              Fique por dentro das tendências do mercado da beleza que vão destacar seu trabalho e atrair mais clientes para o seu negócio.
            </p>
          </div>
          <div className="detail-item">
            <h2 className="detail-title">
              <GiHairStrands /> Desfile Hair Show
            </h2>
            <p className="detail-text">
              Participe de um desfile incrível e veja ao vivo as melhores tendências de corte, cor e estilo, mostrando como inovar no seu salão.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
