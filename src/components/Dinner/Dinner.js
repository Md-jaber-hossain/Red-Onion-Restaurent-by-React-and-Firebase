import React from 'react';
import { Link } from 'react-router-dom';

const Dinner = (props) => {
    const { id, img, name, description, price } = props.food
    return (
        <div>
            <Link to={`/orderitem/${id}`} className="text-decoration-none">
                <div className="col text-center">
                    <div className="h-100 card-styles">
                        <div className="text-center">
                            <img src={img} className="w-50 h-50 m-4" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-dark">{name}</h5>
                            <p className="card-text text-secondary">{description}</p>
                            <h5 className="card-text fw-bold text-dark">Price: $ {price}</h5>
                            <Link to={`/orderitem/${id}`}><button className="btn-style mt-3">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Dinner;