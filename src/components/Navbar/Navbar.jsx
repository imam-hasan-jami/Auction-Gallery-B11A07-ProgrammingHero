import React from "react";

const Navbar = () => {
    return (
        <div className="max-w-[1500px] mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
                    </div>
                    <a className="text-2xl font-poppins font-bold text-yellow-400">
                        <span className="font-light text-blue-900">
                            Auction
                        </span>
                        Gallery
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-poppins gap-14">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Auctions</a>
                        </li>
                        <li>
                            <a>Categories</a>
                        </li>
                        <li>
                            <a>How to works</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-circle btn-ghost bg-[#EBF0F5] text-blue-900 mr-4">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />{" "}
                            </svg>
                            <span className="badge badge-md badge-primary indicator-item bg-blue-900 text-white rounded-full w-5 h-5 top-[-5px] right-[-3px]">
                                9
                            </span>
                        </div>
                    </button>
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn-circle avatar cursor-pointer"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://i.ibb.co.com/FdcCM0P/9ff77355aa9da65684690f04d3ca021a.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
