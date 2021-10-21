import React from 'react';
import "./MenuBar2.css";
import { Link } from "react-router-dom";

const MenuBar2 = () => {
  return (
    <>
      <div className="d-flex">
        <ul className="mx-auto mt-4 d-flex">
          <Link to="/home" className="list2">
            <li>Breakfast</li>
          </Link>
          <Link to="/lunch" className="list2">
            <li>Lunch</li>
          </Link>
          <Link to="/dinner" className="list2">
            <li>Dinner</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default MenuBar2;


