import React, {Component} from 'react';

class AmountInProductsCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            numero: ""
        }
    }

    apiCall(url, handler){
        fetch(url)
        .then( response => response.json() )
        .then( data => handler(data) )
        .catch( e => console.log(e) )
    }

    componentDidMount(){
        this.apiCall("https://grupo10dh.herokuapp.com/api/products/getProducts", this.mostrarNumero)
    }

    mostrarNumero = (data) => {
        let total = 0;

        for( let i = 0; i < data.data.rows.length; i++){
            total = total + Number(data.data.rows[i].precio);
        }
        
        this.setState({
          numero: total.toFixed(2)
        })
    }

    render() {
        return (
            <div class="col-md-4 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">$ {this.state.numero}</div>
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