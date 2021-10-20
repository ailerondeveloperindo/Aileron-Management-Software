import React from 'react';
import POSShowCheckOutButton from './POSShowCheckoutButton';
import POSItemColumn from './POSItemColumn';
import ReactDOM from 'react-dom';

class POSDetailPesananWrapper extends React.Component {
    render() {
        return (
            <>
                <div className="detail-pesanan--header py-4 px-3">
                    <h3 className="m-0">Detail Transaksi</h3>
                </div>
                <div className="cart-produk">
                    <POSItemColumn />
                </div>
                <POSShowCheckOutButton totalBelanja="200.000" />
            </>
        );
    }
}

ReactDOM.render(<POSDetailPesananWrapper />, document.querySelector(".detail-pesanan"))