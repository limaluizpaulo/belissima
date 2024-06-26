'use client'
import './style.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contato: React.FC = () => {
    emailjs.init('ibZ3ZYbG6iTWW7cn4');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!formData.name || !formData.phone || !formData.email) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        emailjs.send('service_9rfxk9p', 'template_osakh56', formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                });
                alert('Mensagem enviada com sucesso!');
            }, (err) => {
                console.log('FAILED...', err);
                alert('Falha ao enviar mensagem.');
            });
    };

    return (
        <section id="contato" className="contato">
            <div className="cta-content">
                <h2 className='titulo-cta'>TRANSFORME SUA CARREIRA COM NOSSOS CURSOS E TREINAMENTOS</h2>
                <p className='call'>Junte-se a milhares de profissionais que já transformaram suas carreiras com os nossos cursos de alisamento capilar. Aprenda com a especialista e ofereça o melhor em alisamento capilar aos seus clientes.</p>
                
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
                    <input type="tel" name="phone" placeholder="Celular" value={formData.phone} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <button type="submit" className="cta-button">Enviar</button>
                </form>

                <p className="contact-info">Enecir: (93) 9227-8870 <br />Distribuidora Autorizada</p>
            </div>
        </section>
    )
}
export default Contato;