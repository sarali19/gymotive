import React from "react";
// import Counter from "./components/Counter";
import CreateProductForm from "./components/CreateProductForm";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/cart" element={<Cart/>}/>
          <Route path= "/wishlist" element={<Wishlist/>}/>
          <Route path= "/profile" element={<Profile/>}/>
        </Routes>
      </Router>
      {/* <Counter /> */}
      {/* <CreateProductForm /> */}
    </div>
  );
}

export default App;
