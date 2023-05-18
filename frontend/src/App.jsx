import React, { useState } from "react";
// import Counter from "./components/Counter";
import CreateProductForm from "./components/CreateProductForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Form from "./pages/Form";
import FormSignIn from "./pages/FormSignIn";



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
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Form />} />
          <Route path="/signin" element={<FormSignIn />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
