import classes from './Estilos4.module.css';
import { useState } from 'react';

export default function Estilos4() {

  const [activo, setActivo] = useState(true);

  let clases = [classes.parrafo];
  if(activo) {
    clases.push(classes.verde);
  }

  return (
    <div>
      <p className={`${classes.parrafo} ${classes.verde}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti, est dolorum quae rerum dicta.</p>

      {/* AHORA CON CLASES DINÁMICAS */}
      <p className={clases.join(' ')}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti, est dolorum quae rerum dicta.</p>
      <button onClick={() => setActivo(!activo)}>Modificar estado</button>
    </div>
  )
}