import React from 'react';
import POSShowProductCard from './POSShowProductCard';
import ReactDOM from 'react-dom';

class POSProductListWrapper extends React.Component {
    render() {
        return (
            <>
                <POSShowProductCard />
                <POSShowProductCard />
                <POSShowProductCard />
                <POSShowProductCard />
                <POSShowProductCard />
                <POSShowProductCard />
                <POSShowProductCard />
                <POSShowProductCard />
                <POSShowProductCard />
                <POSShowProductCard />
            </>
        );
    }
}

ReactDOM.render(<POSProductListWrapper />, document.querySelector(".product-wrap--product-list"))