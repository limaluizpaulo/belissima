"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./styles.css";

export default function Tecnicos() {
  const tecnicos = [
    {
      nome: "Débora Guerra",
      descricao:
        "Educadora master Garden Hair, expert em colorimetria com experiência internacional, empresária dona de uma rede de salões no Ceará. Trazendo a colorimetria cromática, estudo que avalia o fototipo aliado com o visagismo para definir o cabelo que mais harmoniza com cada cliente.",
      instagram:
        "https://www.instagram.com/deboraguerrahair?igsh=MTR6ajgzNmMwNGxhbw==",
      imagem: "/deboraramalho.jpeg",
    },
    {
      nome: "Simone Bezerra",
      descricao:
        "Educadora técnica master class da GARDEN HAIR, técnica de química, graduada em cosmetologia estética, pós-graduada em tricologia e terapia capilar, com experiência internacional em Portugal, Madri, Itália, Dubai e todo território brasileiro. Diretamente do Rio de Janeiro, trazendo a expertise em bases químicas.",
      instagram:
        "https://www.instagram.com/simonebezerratricologista?igsh=MTU2djRzZ2MxM255OA==",
      imagem: "/simonebezerra.jpeg",
    },
    {
      nome: "Lucas Ramalho",
      descricao:
        "Lucas Ramalho é de Recife-PE, educador master Garden Hair, expert em colorimetria, visagismo, design de mechas e cachoterapia, com experiência internacional. Mais de 10 anos atuando na área da beleza, levando conhecimento através do educacional Garden Hair.",
      instagram:
        "https://www.instagram.com/p/C58jHXYO2eg/?igsh=NW83OTF1YzR4MHp3",
      imagem: "/lucasramalho.jpeg",
    },
  ];

  return (
    <div id="about-section" className="tecnicos-container">
      <h1 className="tecnicos-title">Técnicos que estarão no evento</h1>
      <div className="tecnicos-grid">
        {tecnicos.map((tecnico, index) => (
          <div key={index} className="tecnico-item">
            <img
              src={tecnico.imagem}
              alt={tecnico.nome}
              className="tecnico-imagem"
            />
            <h2 className="tecnico-nome">
              {tecnico.nome}{" "}
              <a
                href={tecnico.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="instagram-icon" />
              </a>
            </h2>
            <p className="tecnico-descricao">{tecnico.descricao}</p>
          </div>
        ))}
      </div>
      <br></br>
     
    </div>
  );
}
