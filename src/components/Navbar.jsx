import { X } from "lucide-react";
import { AlignLeft } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import FormModal from "../Elements/FormModal";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white text-base-200">
        <div className="navbar-start">
          <div className="drawer  lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-outline btn-success drawer-button"
              >
                <AlignLeft />
              </label>
            </div>
            <div className="drawer-side z-10">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
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
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/" className="font-bold text-xl">
            MedClinique
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-outline text-blue-700 hover:bg-blue-700 hover:text-white"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Prendre un Rendez-vous
          </button>
          <dialog id="my_modal_3" className="modal ">
            <div className="modal-box text-blue-700 bg-white w-11/12 max-w-5xl p-10">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  <X />
                </button>
              </form>
              <h3 className="font-bold text-3xl mb-10">
                Remplire le formulaire pour prendre un rendez-vous!
              </h3>
              <FormModal />
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};
