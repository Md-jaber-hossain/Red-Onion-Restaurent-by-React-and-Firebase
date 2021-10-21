import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useFoods = () => {
    const [foods, setFoods] = useState([]);
    const [item, setItem] = useState(1);
    const [cart, setCart] = useState(0);
    console.log(cart);

    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);

    const plusButton = () => {
        const newitem = item + 1;
        if (newitem >= 1) {
            setItem(newitem);
        }

    }
    const minusButton = () => {
        const newitem = item - 1;
        if (newitem >= 1) {
            setItem(newitem);
        }
    }

    const handleAddToCart = () => {
        const newcart = cart + 1;
        setCart(newcart);
    }
    return {
        foods,
        item,
        cart,
        setFoods,
        plusButton,
        minusButton,
        handleAddToCart,
    }

};

export default useFoods;