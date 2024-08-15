import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CustomButton from './../../../components/CustomButton'; // Updated import

const Navbar = () => {
    return (
        <div className='mt-2'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/products"}>Products</NavLink></li>
                            <li><NavLink to={"/contact"}>Contact</NavLink></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost font-logo text-5xl">Apple</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase font-semibold">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/products"}>Products</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    <Link to="/login"><CustomButton text="login" style={"btn-sm"}/></Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
