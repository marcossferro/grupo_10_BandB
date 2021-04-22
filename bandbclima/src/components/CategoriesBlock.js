import React, { Component } from 'react';
import Categories from "./Categories";

class CategoriesBlock extends Component {

	//Estado por defecto de categoria
	constructor(props){
        super(props);
        this.state = {
            categoria: []
        }
    }

	//Utilizo fetch dentro del Metodo ApiCall
	apiCall(url, handler){
        fetch(url)
        .then( response => response.json() )
        .then( data => handler(data) )
        .catch( e => console.log(e) )
    }

	//Llamo dentro del componentDidMount al metodo apiCall usando la URL de la API conrrespondiente y genero una respuesta con mostrarDatos
    componentDidMount(){
        this.apiCall("https://grupo10dh.herokuapp.com/api/products/getCategoriesWithProducts", this.mostrarDatos)
    }

	//mostrarDatos devuelve los datos de la API mediante data
	mostrarDatos = (data) => {

		//Defino el nuevo estado de categoria con el array de las categorias
		this.setState({
			categoria: data.data
		})
	}

	//Dentro del render llamo a this.state.categoria para que me devuelva su estado final.
	
	//Utilizo el metodo de array MAP para recorrerlo y generar tantos componentes CATEGORIES como cantidad de categorias que tenga en el array y asignarles como propiedad su nombre correspondiente
  render() {
		return (
	<div className="col-lg-6 mb-4">						
	    <div className="card shadow mb-4">
			<div className="card-header py-3">
				<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
			</div>
		<div className="card-body">
			<div className="row">
				{this.state.categoria.map( categoria => 
					<Categories categoria = {categoria.type} cantidad = {categoria.productos.length}/>
				)}
			</div>
		</div>
		</div>
	</div>
    );
	}

}

export default CategoriesBlock;