import React, { Component } from 'react';

class ProductData extends Component {

  //Defino cada una de las propiedades de las filas del componente TABLE que como contenido tendra el detalle de cada una de los productos de la DB.

  render(){
    return (
    <tr>
        <td>{this.props.nombre}</td>
        <td>{this.props.detalle}</td>
        <td>{this.props.precio}</td>
        <td>
        <ul>
            <li>{this.props.categoria}</li>
        </ul>
        </td>
        <td>
        </td>
        <td>245</td>
        </tr>
  );
}

}

export default ProductData;