import React from 'react';
import "./MenuBar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
import useAuth from '../../hooks/useAuth';
import useFoods from '../../hooks/useFoods';

const MenuBar = () => {
  const { name, logout, user, loggedInUser } = useAuth();
  const { cart } = useFoods();
  return (
    <>
      {/* Navbar for all pages */}
      <nav className="navbar navbar-expand-lg navbar-light menuBar-bg fixed-top ">
        <div className="container-fluid">


          <button className="navbar-toggler bg-white ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className="ms-md-5 col-md-6">
              <img className="w-25" src={logo} alt="" />
            </div>

            <ul className="navbar-nav ms-auto me-md-5">
              <Link to="/home" className="list">
                <li>Home</li>
              </Link>
              <Link to="/dinner" className="list">
                <li><i class="fas fa-cart-arrow-down"> {cart} </i></li>
              </Link>
              {!user.email && <Link to="/login" className="list">
                <li>Login</li>
              </Link>}
              {user.email && <li className="list" style={{ color: "red", fontWeight: "bold" }}>
                {user.displayName} {name}
              </li>
              }

              {user.email ?
                <li className="list">
                  <button className="signup-btn-style" onClick={logout}>Logout</button>
                </li>
                :
                <Link to="/register" className="list">
                  <button className="signup-btn-style">Sign up</button>
                </Link>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuBar;
