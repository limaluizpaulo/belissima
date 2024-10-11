"use client";
import React from "react";
import {
  FaClipboardList,
  FaCut,
  FaSprayCan,
  FaPalette,
  FaChartLine,
} from "react-icons/fa";
import { PiHairDryerFill } from "react-icons/pi";
import { GiHairStrands } from "react-icons/gi";
import "./styles.css";

export default function EventDetails() {
  return (
    <div id="event-details" className="event-details-container">
       <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 10 1440 120"
      >
        <path
          fill="#ffd700"
          fill-opacity="1"
          d="M0,64L60,74.7C120,85,240,107,360,112C480,117,600,107,720,106.7C840,107,960,117,1080,122.7C1200,128,1320,128,1380,128H1440V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
        ></path>
      </svg>
      <h1 className="event-details-title">
        Saiba quais técnicas e conhecimentos inovadores você vai dominar ao
        participar, garantindo seu ingresso.
      </h1>
      <div className="event-details-content">
        <div className="details-left">
          <div className="detail-item">
            <h2 className="detail-title">
              <FaClipboardList /> Gestão de Salão
            </h2>
            <p className="detail-text">
              Aprenda a otimizar a gestão do seu salão com técnicas práticas e
              comprovadas, e veja seus lucros crescerem.
            </p>
          </div>
          <div className="detail-item">
            <h2 className="detail-title">
              <FaCut /> Loiro e Liso
            </h2>
            <p className="detail-text">
              Domine a arte de combinar loiro e liso em um só procedimento,
              proporcionando resultados impecáveis em menos tempo.
            </p>
          </div>
          <div className="detail-item">
            <h2 className="detail-title">
              <FaSprayCan /> Cachoterapia
            </h2>
            <p className="detail-text">
              Aprimore suas habilidades com técnicas exclusivas para cachos,
              oferecendo tratamentos personalizados e resultados
              impressionantes.
            </p>
          </div>
        </div>

        <div className="details-right">
          <div className="detail-item">
            <h2 className="detail-title">
              <FaPalette /> Colorimetria
            </h2>
            <p className="detail-text">
              Descubra como oferecer atendimentos personalizados com a
              colorimetria cromática, garantindo resultados incríveis e clientes
              fiéis.
            </p>
          </div>
          <div className="detail-item">
            <h2 className="detail-title">
              <FaChartLine /> Tendências
            </h2>
            <p className="detail-text">
              Fique por dentro das tendências do mercado da beleza que vão
              destacar seu trabalho e atrair mais clientes para o seu negócio.
            </p>
          </div>
          <div className="detail-item">
            <h2 className="detail-title">
              <GiHairStrands /> Desfile Hair Show
            </h2>
            <p className="detail-text">
              Participe de um desfile incrível e veja ao vivo as melhores
              tendências de corte, cor e estilo, mostrando como inovar no seu
              salão.
            </p>
          </div>
          <div className="detail-item">
            <h2 className="detail-title">
              <PiHairDryerFill /> Lisoterapia
            </h2>
            <p className="detail-text">
              O alisamento semi-definitivo de base ácida que alisa 100% qualquer
              curvatura de cabelo na primeira aplicação e ainda oferece
              benefícios da terapia capilar.
            </p>
          </div>
        </div>
      </div>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="30 0 1400 360"
       
      >
        <path
          fill="#ffd700"
          fill-opacity="1"
          d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,149.3C1120,117,1280,107,1360,101.3L1440,96V320H0Z"
        ></path>
      </svg>
    </div>
  );
}
