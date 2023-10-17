import React, { useState, useEffect } from 'react';
import './App.css'; 

const Portfolio: React.FC = () => {
  const descricaoText: string =
    'Soou um desenvolvedor Fullstack apaixonado por inovação, especializado em C#, Java, Angular, React, SQL, Azure, AWS e muito mais. Transformando conceitos em realidade digital com expertise diversificada e boa criatividade.';
  const [descricao, setDescricao] = useState<string>('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < descricaoText.length) {
        setDescricao((prevDescricao) => prevDescricao + descricaoText.charAt(index));
        index++;
      } else {
        clearInterval(intervalId); 
      }
    }, 50); 

    return () => {
      clearInterval(intervalId); 
    };
  }, []); 

  return (
    <div className="inicio">
      <div className='apresentacao'>
      <h1>Olá me chamo Júlio Júnior Saldanha Alegre</h1>
      <h2>
        Developer <code className='stack'>&lt;Fullstack/&gt;</code>
      </h2>
      <p>{descricao}</p>
      <a className='botao' href="https://github.com/JulioJuniorSaldanha"><img  src="src\img\icons-github.svg"/>Veja meus projetos</a>
      </div>
      <img className='fotinha' src="src\img\Foto.png"/>
      
    </div>

  );
};

export default Portfolio;