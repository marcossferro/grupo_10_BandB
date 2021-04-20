import React, { Component } from 'react';

class LastProduct extends Component {

	//Estado por defecto de nombre, imagen, detalle y precio
	constructor(props){
        super(props);
        this.state = {
            nombre: "",
			imagen: "",
			detalle: "",
			precio: "",
        }
    }

	//Utilizo fetch dentro del Metodo ApiCall
    apiCall(url, handler){
        fetch(url)
        .then( response => response.json() )
        .then( data => handler(data) )
        .catch( e => console.log(e) )
    }

	//Llamo dentro del componentDidMount al metodo apiCall usando la URL de la API conrrespondiente y genero una respuesta con mostrarProducto
    componentDidMount(){
        this.apiCall("https://grupo10dh.herokuapp.com/api/products/getProducts", this.mostrarProducto)
    }

	//mostrarProducto devuelve los datos de la API mediante data
    mostrarProducto = (data) => {

		//Guardo el array de productos dentro de ARRAY
		let array = data.data.rows;
		//Guardo el ultimo producto dentro de ULTIMOPRODUCTO
		let ultimoProducto = array[array.length - 1]

		//Defino el nuevo estado de nombre, imagen, detalle, precio
		this.setState({
			nombre: ultimoProducto.nombre,
			imagen: ultimoProducto.imagen,
			detalle: ultimoProducto.detalle,
			precio: ultimoProducto.precio,
		})
    }
	

	//Dentro del render llamo a this.state y cada una de las propiedades para ser mostradas
	render(){
		return (
	<div className="col-lg-6 mb-4">
		<div className="card shadow mb-4">
			<div className="card-header py-3">
				<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
			</div>
			<div className="card-body">
			    <p>{this.state.nombre}</p>
				<div className="text-center">
					<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={"public/imgProducts" + this.state.imagen} alt="lastProduct"/>
				</div>
				<p>{this.state.detalle}</p>
				<p>$ {this.state.precio}</p>
			</div>
		</div>
	</div>
  );
}

}

export default LastProduct;