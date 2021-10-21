import React from 'react';

function POSItemColumn() {
    return (
        <div className="cart-produk--itemcolumn">
             <div className="d-flex flex-column p-2 w-25">
                <input type="text" className="cart-produk--qtyinput w-100" placeholder="QTY"/>
            </div>           
            <div className="d-flex flex-column w-50 align-items-center">
                <h2 className="m-0">Product Title</h2>
                <p className="m-0">Product Description</p>
            </div>
            <div className="d-flex p-2">
                <h2 className="m-0">150.000</h2>
            </div>
            
        </div>
    );
}

export default POSItemColumn;