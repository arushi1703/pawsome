import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () =>{
  const handleClose: any = (e: MouseEvent) => {
    (document.getElementById("my-drawer-3") as HTMLInputElement).checked = false;
  }
  return (
  <nav>
    <div className="flex-none flex items-center">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost bg-blue-600 w-14">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current text-white ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
  <div className="drawer">
  <input id="my-drawer-3" type="checkbox"  className="drawer-toggle" />
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-blue-600 min-h-full w-80 p-4 text-white">
      {/* Sidebar content here */}
      <li onClick={handleClose} className="text-xl hover:bg-blue-700 rounded-lg">
        <NavLink to="home" className="p-4 block">
          Dashboard
        </NavLink>
      </li>
      <li onClick={handleClose} className="text-xl hover:bg-blue-700 rounded-lg">
        <NavLink to="pets" className="p-4 block">
          Pets
        </NavLink>
      </li>
      <li onClick={handleClose} className="text-xl hover:bg-blue-700 rounded-lg">
        <NavLink to="service" className="p-4 block">
          Services
        </NavLink>
      </li>
    </ul>
  </div>
</div>
</nav>)
};

export default Navbar;
