"use client";  // Adicione esta linha
import React, { useState } from 'react';
import Image from "next/image";
import './style.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>

            <Image
                src="/logo.png"
                alt="Create Next App"
                width={190}
                height={70}
                className="logo"
            />
            <div className="burger" onClick={toggleMenu}>
                <div className={`line1 ${isOpen ? 'open' : ''}`}></div>
                <div className={`line2 ${isOpen ? 'open' : ''}`}></div>
                <div className={`line3 ${isOpen ? 'open' : ''}`}></div>
            </div>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul>
                <li>
            <a href="#inicio">
             Início
            </a>
          </li>
          <li>
            <a href="#beneficios">
              Benefícios
            </a>
          </li>
          <li>
            <a href="#nossos-produtos">
              Nossos Produtos
            </a>
          </li>
          <li>
            <a href="#sobre-mim">
             Sobre Mim
            </a>
          </li>
          <li>
            <a href="#contato">Contato</a>
              
          </li>
                </ul>
            </nav>
            <Image
                src="/belissima.png"
                alt="Create Next App"
                width={232}
                height={70}
                className="logo"
            />
        </header>
    );
};

export default Header;
