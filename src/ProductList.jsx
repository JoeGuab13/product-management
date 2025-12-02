import React from "react";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <Link to="/add" className="text-blue-600 underline">Add New Product</Link>

      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="text-center border">
              <td><img src={p.image} className="w-16" /></td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td>{p.price * p.quantity}</td>
              <td><Link to={`/product/${p.id}`} className="text-blue-600">View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="mt-4 font-bold">Total: ₱{total}</h2>
    </div>
  );
}
