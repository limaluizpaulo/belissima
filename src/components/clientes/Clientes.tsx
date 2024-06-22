'use client'
import './style.css';

const Clientes: React.FC = () => {
    return (
        <section id="clientes" className="clientes">
            <h1 className="titulo-clientes">Treinamentos</h1>
            <div className="lista-clientes">
                <div className="caixa-clientes">
                    <img src="/c1.jpeg" alt="Cliente 1" />
                </div>
                <div className="caixa-clientes">
                    <img src="/c3.jpeg" alt="Cliente 2" />
                
                </div>
                <div className="caixa-clientes">
                    <img src="/c2.jpeg" alt="Cliente 3" />
                   
                </div>
            </div>
        </section>
    )
}
export default Clientes;