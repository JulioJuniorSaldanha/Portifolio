import './app.css'; 

function Tecnologias() {
 

  return (
    <div className="Tecnologias">
      <h1>Principais tecnologias que eu conheço</h1>
      
      <h3>Linguagens de programação</h3>

      <div className='linguagems'> 
        <img src="src\img\CSharp.png" alt='C#'/>
        <img src="src\img\java.png" alt='Java'/>
        <img src="src\img\JavaScript.png" alt='Java'/>
      </div>

      <h3>Banco de dados</h3>
      <div className='linguagems'> 
        <img src="src\img\sql.png" alt='sql'/>
        <img src="src\img\H2.svg" alt='H2'/>
      </div>

      <h3>Cloud Services</h3>
      <div className='linguagems'> 
        <img src="src\img\amazon-web-services.png" alt='sql'/>
        <img src="src\img\Azure.png" alt='H2'/>
      </div>

    </div>
  );
}

export default Tecnologias;
