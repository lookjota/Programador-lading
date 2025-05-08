import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Gallery = () => (
 <div>
 <Navbar/>
  <div className="p-8 bg-gray-100 min-h-screen">
    <h2 className="text-3xl font-bold mb-4">Galeria de Projetos</h2>
    <div className="grid grid-cols-2 gap-4">
      <img src="https://via.placeholder.com/300x200?text=Site+1" alt="Site 1"/>
      <img src="https://via.placeholder.com/300x200?text=App+2" alt="App 2"/>
    </div>
  </div>
 <Footer/>
 </div>
);

export default Gallery;
