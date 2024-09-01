import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-black w-full text-white">
      <ul className="flex justify-around h-16 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/nos-doctors">Nos Doctors</Link>
        </li>
        <li>
          <Link to="/nos-doctors/detail">Detail doc..</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/services/detail">detail ser..</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};
