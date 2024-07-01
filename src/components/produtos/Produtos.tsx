'use client'
import './style.css';                   

const Produtos: React.FC = () => {
 return (
  <div id="nossos-produtos" className='container-produtos'>
   <h1>Nossos Produtos</h1>
  <div className='produtos'>
  
  <div className='produto'>
  <img src='/50.png' alt='Excellence tree ' />
  <p className="descricao"  >Excellence tree  </p>
  </div>
  < div className='produto'>
  <img src='/PO.png' alt='Pó descolorante' />
  <p className="descricao"  >Pó descolorante </p>
  </div>
  < div className='produto'>
  <img src='/24.png' alt='Eko line' />
  <p className="descricao"  >Eko line</p>
  </div>
  < div className='produto'>
  <img src='/1.png' alt='Defined curls' />
  <p className="descricao"  >Defined curls</p>
  </div>
</div>
</div>
 );
}

export default Produtos;