'use client'
import './style.css';

const Clientes: React.FC = () => {
    return (
        <section  id="trainings" className="clientes">
            <h1 className="titulo-clientes">Treinamento: Garden Day</h1>
            <div className="lista-clientes">
                <div className="caixa-clientes">
                    <img src="/treinamentos2.jpeg" alt="Cliente 1" />
                </div>
                <div className="caixa-clientes">
                    <img src="/treinamentos3.jpeg" alt="Cliente 2" />
                
                </div>
                <div className="caixa-clientes">
                    <img src="/c2.jpeg" alt="Cliente 3" />
                   
                </div>
            </div>
        </section>
    )
}
export default Clientes;