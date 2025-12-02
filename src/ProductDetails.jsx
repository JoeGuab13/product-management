import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === String(id));
  if (!product) return <div className="p-4">Product not found. <button onClick={() => navigate(-1)}>Back</button></div>;

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="mb-3">← Back</button>
      <h2 className="text-2xl">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-48 my-3" />
      <div>Category: {product.category}</div>
      <div>Price: ₱{product.price.toLocaleString()}</div>
      <div>Quantity: {product.quantity}</div>
      <div>Description: {product.description}</div>
      <div>Specs: {product.specs}</div>
    </div>
  );
}
