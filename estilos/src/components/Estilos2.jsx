import { useState } from 'react';
import styled from 'styled-components';
import './Estilos2.css';

// Si vamos a crear componentes estilizados pero que son sencillos,
// lo puedo/debo hacer fuera de la función porque sino se va a estar renderizando todo el rato
// Tengo que tener los estilos de esta librería en el mismo archivo del componente

const StyledDiv = styled.div`
// Aquí dentro ya todo es como CSS
  background-color: #f6f6f6;
  padding: 50px;
  border-radius: 5px;
`

const StyledButton = styled.button`
  background-color: #c67afc;
  color: white;
  font-size: 25px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`

function Estilos2() {
  // Aplicar distintas clases con strings es tedioso de manejar
  // Por eso intentaremos hacerlo con arrays, son más flexibles

  const [cont, setCont] = useState(0);

  const clases = ['contador']

  if(cont >= 0 && cont < 5) {
    clases.push('bajo');
  }

  if(cont >= 5 && cont < 10) {
    clases.push('medio');
  }

  if(cont >= 10) {
    clases.push('alto');
  }

  return (
    <StyledDiv>
      <p className={clases.join(' ')}>Contador: {cont}</p>
      {/* <button onClick={() => setCont(cont + 1)}>Incrementar</button> */}
      <StyledButton onClick={() => setCont(cont + 1)}>Incrementar</StyledButton>
    </StyledDiv>
  )
}

export default Estilos2;