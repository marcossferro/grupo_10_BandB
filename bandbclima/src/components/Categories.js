import React, { Component } from 'react';

class Categories extends Component {

	// Utilizo props para asignarle una propiedad que luego va a ser modificada en el componente CATEGORIESBLOCK
	render (){
		return (
			<div className="col-lg-6 mb-4">
				<div className="card bg-info text-white shadow">
					<div className="card-body">
						<p>{this.props.categoria}</p>
					</div>
				</div>
			</div>
		);
	}
	
}

export default Categories;