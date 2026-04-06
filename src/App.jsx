import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Book from "./pages/Book";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
         <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
