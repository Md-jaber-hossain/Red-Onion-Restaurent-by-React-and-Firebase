import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeBreakfast from '../HomeBreakfast/HomeBreakfast';
import image from "../../images/Image/adult-blur-blurred-background-687824.png"
import image2 from "../../images/Image/chef-cook-food-33614.png"
import image3 from "../../images/Image/architecture-building-city-2047397.png"
import icon1 from "../../images/ICON/Group 245.png"
import icon2 from "../../images/ICON/Group 204.png"
import icon3 from "../../images/ICON/Group 1133.png"
import { Link } from 'react-router-dom';
import useFoods from '../../hooks/useFoods';

const Home = () => {
    // state and fetching data from my JSON file
    // const [foods, setFoods] = useState([]);
    // useEffect(() => {
    //     fetch('./foods.json')
    //         .then(res => res.json())
    //         .then(data => setFoods(data));
    // }, []);
    const {foods} = useFoods();
    return (
        <>
            <div className="container mt-5 mb-5">
                <div class="row row-cols-1 row-cols-md-3 g-5">
                    {
                        foods.slice(0, 6).map(food => <HomeBreakfast
                            key={food.id}
                            food={food}>
                        </HomeBreakfast>)
                    }
                </div>

                <div className="text-center my-5">
                    <Link to="/shipping"><button className="btn btn-secondary">CheckOut Your Food</button></Link>
                </div>
            </div>

            {/* --------Home page extra card------- */}

            <div className=" container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="fw-bold">Why you<span className="text-danger"> choose</span> us <span className="text-danger">!!</span></h2>
                        <p className="text-secondary">For food, it’s best to describe the central element in the dish and then mention the sauces and sides.</p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="h-100 card-styles">
                            <img src={image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div className="d-flex align-items-center">
                                    <img src={icon1} alt="" />
                                    <h5 class="card-title ms-2"> Fast delivery</h5>
                                </div>
                                <p class="card-text">Retail food delivery is a courier service in which a restaurant, store, or independent food-delivery.</p>
                                <Link to="/dinner" className="text-decoration-none">See more</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100 card-styles">
                            <img src={image2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div className="d-flex align-items-center">
                                    <img src={icon3} alt="" />
                                    <h5 class="card-title ms-2">A good responder</h5>
                                </div>
                                <p class="card-text">Order food from restaurants or groceries from top shops across Bangladesh </p>
                                <Link to="/lunch" className="text-decoration-none">See more</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100 card-styles">
                            <img src={image3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div className="d-flex align-items-center">
                                    <img src={icon2} alt="" />
                                    <h5 class="card-title ms-2">Home delivery</h5>
                                </div>
                                <p class="card-text">The online food delivery industry is booming business. Here are 3 big reasons why offering a food delivery service can benefit your restaurant.</p>
                                <Link to="/dinner" className="text-decoration-none">See more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

