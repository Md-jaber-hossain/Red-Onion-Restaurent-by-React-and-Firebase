import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useFoods from '../../hooks/useFoods';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
    // state and fetching data from my JSON file
    // const [foods, setfoods] = useState([]);
    // useEffect(() => {
    //     fetch('./foods.json')
    //         .then(res => res.json())
    //         .then(data => setfoods(data));
    // }, []);
    const {foods} = useFoods();
    return (
        <>
            <div className="container mt-5 mb-5">
                <div class="row row-cols-1 row-cols-md-3 g-5">
                    {
                        foods.slice(6, 12).map(food => <Dinner
                            key={food.id}
                            food={food}>
                        </Dinner>)
                    }
                </div>
            </div>
        </>
    );
};

export default Dinners;