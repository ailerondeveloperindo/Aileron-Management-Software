import React from 'react';
import POSShowCheckOutButton from './POSShowCheckoutButton';
import POSItemColumn from './POSItemColumn';
import ReactDOM from 'react-dom';

class POSDetailPesananWrapper extends React.Component {
    render() {
        return (
            <>
                <div className="detail-pesanan--header py-3 px-2">
                    <h3 className="m-0">Detail Transaksi</h3>
                </div>
                <div className="cart-produk">
                    <POSItemColumn productName="Indomie Goreng" qty="50" productPrice="1000" />
                    <POSItemColumn productName="Indomie Goreng Aceh 200gr" productDescription="Product Description" />
                    <POSItemColumn productName="Sprite Lemon 500ml" productDescription="Product Description" />
                </div>
                <POSShowCheckOutButton totalBelanja="200.000" />
            </>
        );
    }
}

ReactDOM.render(<POSDetailPesananWrapper />, document.querySelector(".detail-pesanan"))