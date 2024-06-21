'use client'
import './style.css';                   

const Produtos: React.FC = () => {
 return (
  <div id="nossos-produtos" className='container-produtos'>
   <h1>Nossos Produtos</h1>
  <div className='produtos'>
  
  <iframe
    className='video'
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/pjbmtqzGq5M"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
  <iframe 
    className='video'
    width="100%" 
    height="315" 
    src="https://www.youtube.com/embed/uWBc5lcA4SI" 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
  <iframe 
    className='video'
    width="100%" 
    height="315" 
    src="https://www.youtube.com/embed/P_USLoj5s20" 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>
</div>
 );
}

export default Produtos;