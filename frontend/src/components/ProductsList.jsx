import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };
  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };
  return (
    <div className="bg-gray-100 flex flex-col justify-center px-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Products
      </h1>
      <h2 className="text-2xl text-gray-600 mb-6 text-center">
        List of Products
      </h2>
      <Link
        to={"/products/add"}
        className="bg-green-500 max-w-max text-white px-4 py-2 rounded-md hover:bg-green-600 mb-2"
      >Add New</Link>
      <div className="w-full max-w-4xl">
        <table className="min-w-[1200px] bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left text-salte-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6">No</th>
              <th className="py-3 px-6">Product Name</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Created By</th>
              <th className="py-3 px-12">Actions</th>
            </tr>
          </thead>
          <tbody className="text-slate-900 text-sm font-light">
            {products.map((product, index) => (
              <tr
                key={product.uuid}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="py-3 px-6 text-left">{product.name}</td>
                <td className="py-3 px-6 text-left">${product.price}</td>
                <td className="py-3 px-6 text-left">{product.user.name}</td>
                <td className="py-3 px-6 flex gap-4 ">
                  <Link
                    to={`/products/edit/${product.uuid}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => deleteProduct(product.uuid)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* Repeat <tr> elements for more users */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
