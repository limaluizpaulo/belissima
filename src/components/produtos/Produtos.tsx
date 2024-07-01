'use client'
import './style.css';                   

const Produtos: React.FC = () => {
 return (
  <div id="nossos-produtos" className='container-produtos'>
   <h1>Nossos Produtos</h1>
  <div className='produtos'>
  
  <div className='produto'>
  <img src='/50.png' alt='Shampoo Garden Hair' />
  </div>
  < div className='produto'>
  <img src='/24.png' alt='Condicionador Garden Hair' />
  </div>
  < div className='produto'>
  <img src='/PO.png' alt='Condicionador Garden Hair' />
  </div>
</div>
</div>
 );
}

export default Produtos;