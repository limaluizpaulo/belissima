'use client';
import './style.css'


const Hero: React.FC = () => {
    return (
        <section id="inicio" className="hero">
            <img
                src={window.innerWidth < 768 ? "/sobremim.png" : "/header.jpeg"}
                alt="Produtos"
                className="hero-image"
            />
            <h1 className="hero-title">A Potência do Pará <br /> na Beleza Capilar</h1>

            <img src="/cabelo.jpg" alt="" className="bg-image" />
        </section>
    );
}

export default Hero;
