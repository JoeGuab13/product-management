import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
import ProductDetails from "./ProductDetails";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 45000,
      quantity: 1,
      image: "https://via.placeholder.com/100",
      description: "High‑performance laptop.",
      specs: "Intel i7, 16GB RAM",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Headset",
      category: "Accessories",
      price: 1200,
      quantity: 2,
      image: "https://via.placeholder.com/100",
      description: "Noise‑canceling headset.",
      specs: "Surround Sound",
      rating: 4.2,
    },
  ]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/add" element={<AddProductForm addProduct={addProduct} />} />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </Router>
  );
}

