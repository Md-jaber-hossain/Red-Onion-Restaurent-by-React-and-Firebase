import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import useFoods from '../../hooks/useFoods';
import "./OrderItem.css"

const OrderItem = () => {

    const { orderid } = useParams();
    const { foods, minusButton, plusButton, item } = useFoods();

    const orderItemDetails = foods?.find(food => food.id === parseInt(orderid));
    // console.log(orderItemDetails);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center my-5">
                    <div>
                        <h1>{orderItemDetails?.name}</h1>
                        <p>{orderItemDetails?.description2}</p>
                        <div className=" d-flex">
                            <h2>$ {(orderItemDetails?.price*item).toFixed(2)}</h2>
                            <div className="area-border d-flex ms-5">
                                <button className="btn-minus" onClick={minusButton}>-</button>
                                <input className="input-btn text-center" type="text" value={item} />
                                <button className="btn-plus" onClick={plusButton}>+</button>
                            </div>
                        </div>
                        <Link to="/shipping"><button className="item-add-btn-style mt-3"><i class="fas fa-shopping-cart"></i> Add </button></Link>
                    </div>
                </div>
                <div className="col-md-6 my-5">
                    <img className="img-fluid" src={orderItemDetails?.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OrderItem;
