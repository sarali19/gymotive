import React from "react";
// import Counter from "./components/Counter";
import CreateProductForm from "./components/CreateProductForm";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path= "/" />
          <Route path= "/cart"/>
          <Route path= "/wishlist"/>
        </Routes>
      </Router>
      {/* <Counter /> */}
      {/* <CreateProductForm /> */}
    </div>
  );
}

export default App;
