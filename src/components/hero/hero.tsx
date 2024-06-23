'use client'
import React, { useState, useEffect } from 'react';
import './style.css';



const Hero: React.FC = () => {
    const [imageSrc, setImageSrc] = useState("/header.jpeg");

    useEffect(() => {
        // Esta função só será executada no lado do cliente, após a montagem do componente
        const handleResize = () => {
            const src = window.innerWidth < 768 ? "/sobremim.png" : "/header.jpeg";
            setImageSrc(src);
        };

        // Definir a imagem correta ao carregar
        handleResize();

        // Adicionar listener para mudanças de tamanho da janela
        window.addEventListener('resize', handleResize);

        // Limpar o listener ao desmontar o componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="inicio" className="hero">
            <img
                src={imageSrc}
                alt="Produtos"
                className="hero-image"
            />
            <h1 className="hero-title">A Potência do Pará <br /> na Beleza Capilar</h1>

            <img src="/cabelo.jpg" alt="" className="bg-image" />
        </section>
    );
}

export default Hero;