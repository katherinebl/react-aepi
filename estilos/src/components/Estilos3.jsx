//Styled Components
import Button from './ui/Button';
import { ButtonWrapper } from './ui/ButtonWrapper';

function Estilos3() {

  return(
    <div>
      <Button>Pulsa</Button>
      <Button info bgColor margin >Pulsa otro</Button>
      <ButtonWrapper page="ultima">
        <Button>Anterior</Button>
        <Button>Siguiente</Button>
      </ButtonWrapper>
    </div>
  );
}

export default Estilos3;