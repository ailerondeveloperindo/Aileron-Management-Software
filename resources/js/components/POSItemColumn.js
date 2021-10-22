import React from 'react';

class POSItemColumn extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            productName: this.props.productName,
            qty: this.props.qty,
            productPrice: this.props.productPrice
        };
    }

    calculateTotal(qty = 1, price = 2000){
    //Calculate total of price
        return qty * price
    }

    componentDidMount() {
        this.setState({
            totalPrice: this.calculateTotal(this.state.qty, this.state.productPrice)
        });
    }

    render(){
        return (
            <div className="cart-produk--itemcolumn">
                 <div className="d-flex flex-column p-2 w-25">
                    <input type="text" className="cart-produk--qtyinput p-2" placeholder="QTY" value={this.state.qty}/>
                </div>           
                <div className="d-flex flex-column w-50 justify-content-center">
                    <h2 className="m-0">{this.state.productName}</h2>
                    <p className="m-0">{this.props.productDescription}</p>
                </div>
                <div className="d-flex p-2 align-items-center">
                    <h2 className="m-0">{this.state.totalPrice}</h2>
                </div>
                
            </div>
        );
    }
}

export default POSItemColumn;