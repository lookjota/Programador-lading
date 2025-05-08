import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="font-bold">Programador Web</h1>
    <div className="space-x-4">
      <Link to="/">Início</Link>
      <Link to="/galeria">Galeria</Link>
      <Link to="/faq">FAQ</Link>
    </div>
  </nav>
);

export default Navbar;