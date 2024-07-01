'use client'
import './style.css';
import  {  useEffect, useState } from 'react';

const Beneficios: React.FC = () => {
    const [imageSrc, setImageSrc] = useState(
        {
            width: 853,
            height: 480
        }
    );
    useEffect(() => {
        // Esta função só será executada no lado do cliente, após a montagem do componente
        const handleResize = () => {
            const src = window.innerWidth < 768 ? { width: '100%', height: 300 } : { width: 853, height: 480 };
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
        <section id="beneficios" className="beneficios">
            <div className='lista'>

                <p className='p'>Transforme a saúde e beleza dos seus cabelos com a linha Homecare da Garden Hair!</p>

                <iframe width={imageSrc.width}
                    height={imageSrc.height}
                    className='video'
                    src="https://www.youtube.com/embed/FbgRH5_f2ZE"
                    title="Cosméticos Garden Hair"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                ></iframe>
            </div>


        </section>
    )
}
export default Beneficios;



