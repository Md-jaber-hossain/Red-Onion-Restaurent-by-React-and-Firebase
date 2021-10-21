import React from 'react';
import "./PurchaseComplete.css"

const PurchaseComplete = () => {
    // Purchase message show when click on buy now button
    return (
        <div className=" container purchase text-center mt-5 mb-5">
            <h1>Successfully purchased Food</h1>
            <img className=" img-fluid mt-3 mb-5" src="https://i.ibb.co/R0Hd5Fh/Purchase.png" alt="..." />
        </div>
    );
};

export default PurchaseComplete;