import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "../Login/Login.css";
import logo from "../../images/logo2.png";

const Register = () => {
    const { user, loggedInUser, name, email, password, error, signInUsingGoogle,
        signInUsingGithub, handleNameChange, handleEmailChange, handlePasswordChange, handleOnSubmit } = useAuth();
    return (
        <div className="App container ">
            <div className="row">
                <div className="login-area col-md-12">
                    <div>
                        <div className="login-box d-flex align-items-center justify-content-center">
                            <div className="login">
                            <img className="w-25" src={logo} alt="" />
                                <div className="login-box">
                                    <h2 className="text-danger">Pease Register</h2>
                                    <form onSubmit={handleOnSubmit}>
                                        <input
                                            onChange={handleNameChange}
                                            className="input-felid"
                                            type="text"
                                            name="name"
                                            placeholder="Enter your Name"
                                        />
                                        <br />
                                        <input
                                            onChange={handleEmailChange}
                                            className="input-felid"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your Email"
                                        />
                                        <br />
                                        <input
                                            onChange={handlePasswordChange}
                                            className="input-felid"
                                            type="password"
                                            name="password"
                                            placeholder="Enter your Password"
                                        />
                                        <input
                                            className="mt-3 w-50 btn btn-danger m-auto rounded-3"
                                            type="submit"
                                            value="Register"
                                        />
                                    </form>
                                </div>
                                <button className="me-2 btn btn-primary text-white" onClick={signInUsingGoogle}>
                                    Signup with Google
                                </button>
                                <button className="me-2 btn btn-info text-white" onClick={signInUsingGithub}>
                                    Signup with Github
                                </button>
                                <br /><br />
                                <Link to="/login" className="text-danger">Already have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6">
                    <div className="img">
                        <img
                            className="image-fluid w-100"
                            src="https://i.ibb.co/wB5md78/undraw-Mobile-login-re-9ntv.png"
                            alt=""
                        />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Register;