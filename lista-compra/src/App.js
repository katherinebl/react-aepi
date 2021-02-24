import { Component } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

class App extends Component {

  state = {
    listaProductos: []
  }

  // Definimos en el padre, (ejecutamos en el hijo)
  onTareaCreada = (nuevoProducto) => {
    // Buena practica: hacer una copia del arr original

    const arrProductos = [...this.state.listaProductos];
    arrProductos.push(nuevoProducto);
    this.setState({ listaProductos: arrProductos });

    // Otra forma (más corta):
    // this.setState({
    //   listaProductos: [...this.state.listaProductos, nuevoProducto]
    // })
    console.log('nueva lista', this.state.listaProductos)
    //DUDA.... ¿POR QUÉ ESTO DE ARRIBA VA UN PASO DESPUÉS DEL UI?
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <Formulario tareaCreada={this.onTareaCreada}/>
            </div>
            <div className="col-12 col-md-8">
              <Lista productos={this.state.listaProductos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
