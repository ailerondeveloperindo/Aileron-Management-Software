import React from 'react';

class POSShowCheckOutButton extends React.Component {
    render() {
        return <button className="btn btn-primary btn-lg rounded-0">Bayar - {this.props.totalBelanja}</button>
    }
}

export default POSShowCheckOutButton;