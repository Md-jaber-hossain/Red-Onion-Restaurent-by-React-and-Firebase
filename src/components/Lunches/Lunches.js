import React, { useEffect, useState } from 'react';
import useFoods from '../../hooks/useFoods';
import Lunch from '../Lunch/Lunch';

const Lunches = () => {
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
                        foods.slice(12, 18).map(food => <Lunch
                            key={food.id}
                            food={food}>
                        </Lunch>)
                    }
                </div>
            </div>
        </>
    );
};

export default Lunches;