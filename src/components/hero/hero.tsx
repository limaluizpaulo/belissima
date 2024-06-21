'use client';
import './style.css'


const Hero: React.FC = () => {
    return (
        <section className="hero">
            <img src="/header.jpeg" alt="Produtos" className="hero-image" />
            <h1 className="hero-title">A Potência do Pará <br /> na Beleza Capilar</h1>
            
            <img src="/cabelo.jpg" alt="" className="bg-image" />
        </section>
    );
}

export default Hero;
