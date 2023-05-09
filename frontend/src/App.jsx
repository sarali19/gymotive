import React, { useState } from "react";
// import Counter from "./components/Counter";
import CreateProductForm from "./components/CreateProductForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Footer from "./components/footer";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";
import Counter from "./components/Counter";



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<CreateProductForm />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
