import React, { useState } from "react";
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
import AdminDashboard from "./pages/AdminDashboard";
import ProductDetails from "./pages/ProductDetails";



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
          <Route path="/dashboard/create-product" element={<CreateProductForm />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/signup" element={<Form />} />
          <Route path="/signin" element={<FormSignIn />} />

          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
