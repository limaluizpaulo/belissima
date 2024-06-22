'use client'
import './style.css';

const Contato: React.FC = () => {
    return (
        <section id="contato" className="contato">

            <div className="cta-content">
                <h2 className='titulo-cta'>TRANSFORME SUA CARREIRA COM NOSSOS CURSOS E TREINAMENTOS</h2>
                <p className='call'>Junte-se a milhares de profissionais que já transformaram suas carreiras com os nossos cursos de alisamento capilar. Aprenda com a especialista e ofereça o melhor em alisamento capilar aos seus clientes.</p>
                <a href="https://wa.me/559392278870" className="cta-button" target="_blank">
                    <img src="/whatsapp-icon.png" className="whatsapp-icon" />
                    Fale Conosco no WhatsApp
                </a>
                <p className="contact-info">Enecir: (93) 9227-8870 <br />Distribuidora Autorizada</p>
            </div>

        </section>
    )
}
export default Contato;