// Componente presentacional

function Lista(props) {

  function crearLista() {

    let listaProductos = []

    for (let producto of props.productos) {
      listaProductos.push(<li>{producto.nombre}</li>)
    }

    let result = <ul>{listaProductos}</ul>

    return result;
  }

  return crearLista();
}

export default Lista;