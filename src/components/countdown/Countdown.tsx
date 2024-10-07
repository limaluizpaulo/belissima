"use client";
import React, { useState, useEffect } from "react";
import "./style.css";

const calculateTimeLeft = () => {
  const eventDate = new Date("2024-11-07T00:00:00");
  const currentDate = new Date();
  const difference = eventDate.getTime() - currentDate.getTime();

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div className="countdown-container">
      <div className="left-section">
        <h1 className="title-gardenday"> 🌟 GARDEN DAY</h1>
        <div className="timer">
          <div className="time-block">
            <div className="time-title">Dias</div>
            <div className="time-value">{timeLeft.days}</div>
          </div>
          <div className="time-block">
            <div className="time-title">Horas</div>
            <div className="time-value">{timeLeft.hours}</div>
          </div>
          <div className="time-block">
            <div className="time-title">Minutos</div>
            <div className="time-value">{timeLeft.minutes}</div>
          </div>
          <div className="time-block">
            <div className="time-title">Segundos</div>
            <div className="time-value">{timeLeft.seconds}</div>
          </div>
        </div>
        <ul className="event-details">
        <li>
            <img src="/marca-de-verificacao.png" alt="Icon" className="icon" /> Certificado
          </li>
          <li>
            <img src="/marca-de-verificacao.png" alt="Icon" className="icon" /> Coffee break e Almoço
          </li>
          <li>
            <img src="/marca-de-verificacao.png" alt="Icon" className="icon" /> Networking Estratégico
          </li>
          <li>
            <img src="/marca-de-verificacao.png" alt="Icon" className="icon" /> Kit Profissional Cotton de brinde
          </li>
        </ul>
      </div>

      <div className="right-section">
        <h1 className="title-invest">Investimento</h1>
        <p className="offer-text">
          Oferta especial e exclusiva, por tempo limitado!
        </p>
        <div className="divider"></div>
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
