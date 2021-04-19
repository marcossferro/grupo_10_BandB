import React, {Component} from 'react';

class UsersAmountCard extends Component {

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
        this.apiCall("https://grupo10dh.herokuapp.com/api/users/getUsers", this.mostrarNumero)
    }

    mostrarNumero = (data) => {
        this.setState({
            numero: data.data.count
        })
    }

    render() {
        return (
            <div class="col-md-4 mb-4">
				<div class="card border-left-warning shadow h-100 py-2">
					<div class="card-body">
						<div class="row no-gutters align-items-center">
							<div class="col mr-2">
								<div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
								</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.numero}</div>
						</div>
					    <div class="col-auto">
			    	        <i class="fas fa-user-check fa-2x text-gray-300"></i>
				        </div>
			            </div>
                    </div>
                </div>
            </div>
      );
    }

}

export default UsersAmountCard;