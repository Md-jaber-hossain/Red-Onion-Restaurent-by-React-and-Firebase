import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFoods from '../../hooks/useFoods';
import { useParams } from 'react-router';
import "./Shipping.css"

const Shipping = () => {

    const { foods, minusButton, plusButton, item } = useFoods();


    //---------------//
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        // shipping form
        <div className="row container">
            <div className="col-md-6">
                <div className="d-flex justify-content-center my-5">
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-secondary">Edit Delivery Details </h3>
                        <hr />
                        <input defaultValue={user.displayName} {...register("name")} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />

                        <Link to="/purchase" className="shipping-btn"><input className="bg-danger text-white fw-bold" type="submit" /></Link>
                    </form>
                </div>
            </div>

            {/* shipping price, picture, quantity */}
            <div className="col-md-6">
                <div className="container mt-4">
                    <div className="row">
                        {
                            foods.slice(0, 2).map(food => <>
                                <div className="col-md-6 my-5 text-center">
                                    <img className="img-fluid w-50" src={food?.img} alt="" />
                                </div>
                                <div className="col-md-6 d-flex justify-content-center align-items-center my-5">
                                    <div>
                                        <h5>{food?.name}</h5>
                                        <div className=" d-flex">
                                            <h5>$ {(food?.price * item).toFixed(2)}</h5>
                                            <div className="area-border d-flex ms-5">
                                                <button className="btn-minus" onClick={minusButton}>-</button>
                                                <input className="input-btn text-center" type="text" value={item} />
                                                <button className="btn-plus" onClick={plusButton}>+</button>
                                            </div>
                                        </div>
                                        <p>Best food to buy at present!!</p>
                                        <Link to="/purchase"><button className="item-add-btn-style mt-0"><i class="fas fa-shopping-cart"></i> Buy </button></Link>
                                    </div>
                                </div>
                            </>)
                        }
                        <div className="d-flex justify-content-end mt-5 mb-3 text-secondary">
                            <div>
                                <h6>Total Item: </h6>
                                <h6>Tax: </h6>
                                <h6>Delivery Fee: </h6>
                                <h6>Total: </h6>
                            </div>
                            <div className="ms-5">
                                <h6>  2</h6>
                                <h6> $ 1.69</h6>
                                <h6> $ 2.00</h6>
                                <h6> $ 13.29</h6>
                            </div>

                        </div>
                        <div className="d-flex justify-content-end mb-5">
                            <Link to="/purchase"><button className="place-order-btn">Place Order</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shipping;



