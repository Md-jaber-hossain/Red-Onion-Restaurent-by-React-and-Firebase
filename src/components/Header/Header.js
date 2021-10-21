import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    // Header section implementation
    <div className="header mt-5">
      <div className="d-flex align-items-center justify-content-center">
        {/* Description of header */}
        <div className="text-center p-5 mt-5">
          <h1 className="text-black fw-bold">
            Best food waiting for you
          </h1>
          {/* search  */}
          <div class="input-group my-3 container input-group">
            <input type="text" className="form-control rounded-3" placeholder="Search food names" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-danger rounded-3 " type ="button" id="button-addon2">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;