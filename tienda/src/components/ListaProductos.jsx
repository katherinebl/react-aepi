import ProductoCard from "./ProductoCard"

function ListaProductos({ productos, titulo, productoComprado }) {

  function onProductopulsado(pProducto) {
    productoComprado(pProducto)
  }

  return (
    <div>
      <h2>{titulo}</h2>
      <div className="productos">
        {productos.map(producto => {
          return <ProductoCard
          key={producto.id}
          {...producto}
          productoPulsado={() => onProductopulsado(producto)}
          />
        })}
      </div>
    </div>
  )
}

export default ListaProductos;