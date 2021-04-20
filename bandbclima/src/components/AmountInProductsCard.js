import React, {Component} from 'react';

class AmountInProductsCard extends Component {

    //Estado por defecto de numero
    constructor(props){
        super(props);
        this.state = {
            numero: ""
        }
    }

    //Utilizo fetch dentro del Metodo ApiCall
    apiCall(url, handler){
        fetch(url)
        .then( response => response.json() )
        .then( data => handler(data) )
        .catch( e => console.log(e) )
    }

    //Llamo dentro del componentDidMount al metodo apiCall usando la URL de la API conrrespondiente y genero una respuesta con mostrarNumero
    componentDidMount(){
        this.apiCall("https://grupo10dh.herokuapp.com/api/products/getProducts", this.mostrarNumero)
    }

    //mostrarNumero devuelve los datos de la API mediante data y dentro opero
    mostrarNumero = (data) => {
        let total = 0;

        //Con FOR recorro el array de los productos trayendo unicamente los precios para que todos sean sumados, el resultado se guarda en la variable TOTAL
        for( let i = 0; i < data.data.rows.length; i++){
            total = total + Number(data.data.rows[i].precio);
        }
        
        //Dentro de setState modifico el estado de numero (que por defecto era []) y una vez que es llamado dentro del render trae el valor de TOTAL. Uso toFixed(2) para que me sume 2 decimales al valor final.
        this.setState({
          numero: total.toFixed(2)
        })
    }

    //Dentro del render llamo a this.state.numero para que me devuelva su estado final
    render() {
        return (
            <div class="col-md-4 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Amount In Products </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.numero}</div>
                    </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }

}

export default AmountInProductsCard;