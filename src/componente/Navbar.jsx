import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const items = <div className='flex space-x-10 font-medium'>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/addCoffee'><li>Add Coffee</li></NavLink>
        <NavLink to='/'><li>Update Coffee</li></NavLink>
        <NavLink to='/users'><li>Users</li></NavLink>
        <NavLink to='/signIn'><li>Sign in</li></NavLink>
    </div>

    return (
        <div className='bg-[../../public/images/more/15.jpg]'>
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
                        {items}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Coffee Store</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/singUp'><button className="btn btn-secondary">Sing Up</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;