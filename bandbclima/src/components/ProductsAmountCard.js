import React, {Component} from 'react';

class ProductsAmountCard extends Component {

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
        this.setState({
            numero: data.data.count
        })
    }

    render() {
        return (
        <div className="col-md-4 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Products in Data Base</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.numero}</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
      );
    }

}

export default ProductsAmountCard;