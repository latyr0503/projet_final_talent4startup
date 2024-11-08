// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footers from "./Footer";

export default function Layout() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Outlet />
      <Footers />
    </div>
  );
}
