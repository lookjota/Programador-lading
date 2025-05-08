import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQ = () => (
  <div>
  <Navbar/>
  <div className="p-8 bg-white min-h-screen">
    <h2 className="text-3xl font-bold mb-6">Dúvidas e Sugestões</h2>
    <div>
      <p><strong>Como contratar?</strong> Preencha o formulário na página inicial.</p>
      <p><strong>Que tipo de projetos vocês fazem?</strong> Sites institucionais, lojas virtuais e apps mobile.</p>
    </div>
  </div>
  <Footer/>
  </div>
);

export default FAQ;
