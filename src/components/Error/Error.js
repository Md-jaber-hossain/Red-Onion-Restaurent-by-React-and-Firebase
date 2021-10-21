import React from 'react';
import "./Error.css"

const Error = () => {
    return (
        // Show error message when route not found
        <div className="error-style container text-center mt-5 mb-5">
            <h1>404 - Page not found</h1>
            <img src="https://i.ibb.co/nBd52tL/404-error.jpg" alt="..." />
        </div>
    );
};

export default Error;