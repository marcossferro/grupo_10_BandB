import React, { Component } from 'react';
import Categories from "./Categories";

class CategoriesBlock extends Component {

	constructor(props){
        super(props);
        this.state = {
            categoria: []
        }
    }

	apiCall(url, handler){
        fetch(url)
        .then( response => response.json() )
        .then( data => handler(data) )
        .catch( e => console.log(e) )
    }

    componentDidMount(){
        this.apiCall("https://grupo10dh.herokuapp.com/api/products/getCategories", this.mostrarDatos)
    }


	mostrarDatos = (data) => {
		this.setState({
			categoria: data.data.rows
		})
		console.log(data.data.rows)
	}

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
					<Categories categoria = {categoria.type} />
				)}
			</div>
		</div>
		</div>
	</div>
    );
	}

}

export default CategoriesBlock;