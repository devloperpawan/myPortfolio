import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">Admin Panel</h1>
      <div className="space-x-4">
        <Link to="/project" className="text-gray-700 hover:text-indigo-600 font-medium">Project</Link>
        <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
