import './App.css';
import { productos } from './data/productos';
import ListaProductos from './components/ListaProductos';
import Carrito from './components/Carrito';
import { useState } from 'react';

function App() {

  const [productosComprados, setProductosComprados] = useState([]);

  function onProductoComprado(pProducto) {
    const productosCopia = [...productosComprados];
    productosCopia.push(pProducto);
    setProductosComprados(productosCopia);
  }

  const categoriasRepetidas = productos.map(producto => producto.category);
  // Con Set generamos un array con elementos no repetidos:
  const categorias = [...new Set(categoriasRepetidas)];
  // console.log(categorias);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-8">
            {categorias.map(categoria => (
              <ListaProductos
                key={categoria}
                titulo={categoria.toUpperCase()}
                productos={productos.filter(producto => producto.category === categoria)}
                productoComprado={onProductoComprado}
                />
            ))}
            {/* Este fiiltrado lo podría hcer el API en el back, pero sino, lo podemos hacer nosotros */}

            {/* <ListaProductos titulo="Macbooks" productos={productos.filter(producto => producto.category === 'macbook')}/> */}
          </div>
          <div className="col-4">
              <Carrito productos={productosComprados}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
