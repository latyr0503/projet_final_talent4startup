import { X, AlignLeft } from "lucide-react";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import FormModal from "../Elements/FormModal";

const Navbar = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/nos-doctors", label: "Nos Doctors" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const openModal = () => {
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <div className="navbar text-black px-5 py-4">
      <div className="navbar-start">
        <div className="drawer lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn btn-outline btn-success drawer-button">
              <AlignLeft />
            </label>
          </div>
          <div className="drawer-side z-10">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" />
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link to="/" className="font-bold text-blue-700 text-xl hidden lg:flex">
          MedClinique
        </Link>
      </div>
      <div className="navbar-center font-semibold hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-outline text-blue-700 hover:bg-blue-700 hover:text-white"
          onClick={openModal}
        >
          Prendre un Rendez-vous
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box text-blue-700 bg-white w-11/12 max-w-5xl p-10">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <X />
              </button>
            </form>
            <h3 className="font-bold text-3xl mb-10">
              Remplir le formulaire pour prendre un rendez-vous!
            </h3>
            <FormModal />
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Navbar;
