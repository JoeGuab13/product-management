import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProductForm({ addProduct }) {
  const navigate = useNavigate();
  const [f, setF] = useState({
    image: "https://via.placeholder.com/100",
    name: "",
    category: "",
    description: "",
    specs: "",
    rating: 4,
    price: 0,
    quantity: 1,
  });

  const handleChange = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (!f.name || !f.category || Number(f.price) <= 0) {
      alert("Please fill required fields (name, category, price>0).");
      return;
    }
    addProduct({ ...f, price: Number(f.price), quantity: Number(f.quantity), rating: Number(f.rating) });
    navigate("/");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-3">Add Product</h2>
      <form onSubmit={onSubmit} className="grid gap-2 max-w-md">
        <label>Image URL</label>
        <input name="image" value={f.image} onChange={handleChange} />
        <label>Name</label>
        <input name="name" value={f.name} onChange={handleChange} />
        <label>Category</label>
        <input name="category" value={f.category} onChange={handleChange} />
        <label>Price</label>
        <input name="price" type="number" value={f.price} onChange={handleChange} />
        <label>Quantity</label>
        <input name="quantity" type="number" value={f.quantity} onChange={handleChange} />
        <div className="flex gap-2 mt-2">
          <button type="submit" className="px-3 py-1 bg-green-500 text-white">Add</button>
          <button type="button" onClick={() => navigate(-1)} className="px-3 py-1 border">Cancel</button>
        </div>
      </form>
    </div>
  );
}

