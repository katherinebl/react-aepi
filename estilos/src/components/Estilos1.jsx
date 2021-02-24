import { useState } from 'react';

// ASIGNACIÓN DE ESTILOS A TRAVÉS DE STYLE CON UN OBJETO
// MODIFICAMOS ESE OBJETO CON EVENTOS DE DISTINTOS INPUTS DEL JSX
function Estilos1() {

  // Interactuar con eventos que sean capaz de modificar el estado con los estilos
  const [estilosParrafo, setEstilosParrafo] = useState({
    backgroundColor: 'indigo',
    color: 'white'
  })

  // Puedo cambiar estilos en función de eventos
  function cambiaColor(pColor) {
    setEstilosParrafo({
      ...estilosParrafo,
      backgroundColor: pColor
    })
  }

// Puedo cambiar estilos en función de un input
  function cambiaColorTexto(e) {
    setEstilosParrafo({
      ...estilosParrafo,
      color: e.target.value
    });
  }

  // Puedo cambiar props de estilo incluso que no esté inicializada en el estado
  function cambiaSizeTexto(e) {
    setEstilosParrafo({
      ...estilosParrafo,
      fontSize: e.target.value + 'px'
    })
  }

  return (
    <div>
      <div className="botones">
        <button onClick={() => cambiaColor('red')}>Rojo</button>
        <button onClick={() => cambiaColor('green')}>Verde</button>
        <button onClick={() => cambiaColor('blue')}>Azul</button>
      </div>

      <div>
        <input
          type="text"
          value={estilosParrafo.color}
          onChange={cambiaColorTexto}
          />
      </div>

      <div>
        <input
          type="range"
          min="12"
          max="100"
          step="1"
          onChange={cambiaSizeTexto}
        />
      </div>

      <p style={estilosParrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quidem!</p>
    </div>
  )
}

export default Estilos1;