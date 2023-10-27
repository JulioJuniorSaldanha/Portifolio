import './app.css'; 

function Contato() {
    return (
      <div className="Contato">      
      <h1>Entre em contato comigo</h1>

      <div className="alinhar">
      <div className='meios'>
        <img className='contatoimg' src="src\img\Mail.png"/><p>julio.junior.301@gmail.com</p>      
      </div>
      <div className='meios'>
       <img className='contatoimgzap' src="src\img\whatsapp.png"/><a href="https://wa.me/+5551992167233/?">+55(51)99216-7233</a>
      </div>
      </div>
      
      </div>
      );
}


export default Contato;