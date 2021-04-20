import React, { Component } from 'react';
import ProductData from "./ProductData"

class Table extends Component{

    //Estado por defecto de productos
    constructor(props){
        super(props);
        this.state = {
            productos: []
        }
    }

    //Utilizo fetch dentro del Metodo ApiCall
    apiCall(url, handler){
        fetch(url)
        .then( response => response.json() )
        .then( data => handler(data) )
        .catch( e => console.log(e) )
    }

    //Llamo dentro del componentDidMount al metodo apiCall usando la URL de la API conrrespondiente y genero una respuesta con mostrarProductos
    componentDidMount(){
        this.apiCall("https://grupo10dh.herokuapp.com/api/products/getProducts", this.mostrarProductos)
    }

    //mostrarProductos devuelve los datos de la API mediante data y dentro opero
    mostrarProductos = (data) => {

        //Defino el nuevo estado de productos
        this.setState({
			productos: data.data.rows
		})
    }

    //Dentro del render llamo a this.state.productos para que me devuelva su estado final.
	
	//Utilizo el metodo de array MAP para recorrerlo y generar tantos componentes PRODUCTDATA como cantidad de productos que tenga en el array y asignarles como propiedad sus datos correspondientes
  render(){
      return (
    <div className="card shadow mb-4">
    <div className="card-body">
        <div className="table-responsive">
        <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Categories</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.productos.map( producto => 
					<ProductData id = {producto.id} detalle = {producto.detalle} precio = {producto.precio} nombre = {producto.nombre} categoria = {producto.categoria.type} />
				)}
                </tbody>
            </table>
        </div>
    </div>
</div>
  );
}
}

export default Table;