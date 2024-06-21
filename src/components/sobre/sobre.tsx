import React from 'react';
import  './style.css';

const Sobre: React.FC = () => {
    return (
        <div className='container'>
            <div className='imageContainer'>
                <img src="/sobremimsemfundo.jpeg" alt="Minha Imagem" className='image'/>
            </div>
            <div className='textContainer'>
                <h1 className='title'>Oi, <br></br> Sou Enecir</h1>
                <p className='description'>
                Iniciei minha jornada como padeira antes de me tornar especialista em alisamento capilar. Apaixonei-me pela lisoterapia da Garden Hair e me dediquei a dominar esse tratamento inovador. Como educadora da Garden Hair, ajudei a aumentar as vendas e capacitar muitos profissionais com técnicas eficazes e lives no Instagram. Hoje, como distribuidora autorizada da Garden Hair no Pará, viajo pelo Brasil oferecendo cursos e treinamentos para que você também possa transformar sua carreira e oferecer o melhor em alisamento capilar aos seus clientes. Venha aprender comigo e atingir seus objetivos profissionais! 
                </p>
            </div>
            
        </div>
    );
};

export default Sobre;
