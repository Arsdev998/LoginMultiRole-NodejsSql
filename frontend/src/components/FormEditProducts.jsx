import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormEditProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    const getProductsById = async()=>{
        try {
            const response = await axios.get(`http://localhost:5000/products/${id}`);
            setName(response.data.name)
            setPrice(response.data.price)
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }
    getProductsById();
  },[id])
  const updateProducts = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
        name: name,
        price: price,
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>
      <h2 className="text-xl font-semibold">Edit Product</h2>
      <div className="shadow-none">
        <div className="p-6">
          <div>
            <form onSubmit={updateProducts}>
              <p className="text-center">{msg}</p>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <div>
                  <input
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Price</label>
                <div>
                  <input
                    type="number"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditProducts;
