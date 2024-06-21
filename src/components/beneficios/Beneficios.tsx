'use client'
import './style.css';

const Beneficios: React.FC = () => {
    return (
        <section className="beneficios">
            <h1 className="titulo">Beneficios da Garden Hair</h1>
            <div className="lista">
                <div className="caixa">
                    <img src="/image-box-1.png" alt="Product 1" />
                    <h3>Saúde aos cabelos e respeito a natureza</h3>
                    <p>Descubra a beleza ética: nossos cosméticos são Produtos de Origem Vegetal, promovendo saúde da pele e o respeito à natureza.</p>
                </div>
                <div className="caixa">
                    <img src="/image-box-02.png" alt="Product 1" />
                    <h3>Produtos não testados em animais</h3>
                    <p>Beleza sem crueldade: produtos não testados em animais sob rigoroso controle de qualidade.</p>
                </div>
                <div className="caixa">
                    <img src="/image-box-03.png" alt="Product 1" />
                    <h3>Controle de qualidade</h3>
                    <p>Excelência garantida: nossos produtos passam por rigoroso Controle de Qualidade, assegurando eficácia e segurança em cada item.</p>
                </div>
            </div>
        </section>
    )
}
export default Beneficios;