import React, { useState } from "react";
import CreateProductForm from "./components/CreateProductForm";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import AdminDashboard from "./pages/AdminDashboard";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import EditProductForm from "./components/EditProductForm";

function PageLayout() {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff" /* "#ececec" */, padding: 50 }}>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PageLayout />}>
            <Route path="/dashboard/edit-product/:productId" element={<EditProductForm />} />
            <Route path="/dashboard/create-product" element={<CreateProductForm />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/signup/admin" element={<SignUp isAdmin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin/admin" element={<SignIn isAdmin />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
