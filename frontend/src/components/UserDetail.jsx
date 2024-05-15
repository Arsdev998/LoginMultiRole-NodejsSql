import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const [userData, setUserData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/users/${id}`);
            setUserData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            {userData ? (
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6">
                        <p className="text-lg font-semibold text-gray-800">{userData.name}</p>
                        <p className="text-sm text-gray-600">{userData.email}</p>
                    </div>
                    <div className="px-6 py-4">
                        <p className="text-sm text-gray-700 font-semibold">Products:</p>
                        <table className="w-full mt-2">
                            <thead>
                                <tr className="border-b border-gray-300">
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.products.map((product, index) => (
                                    <tr key={index} className="border-b border-gray-300">
                                        <td className="px-4 py-2">{product.name}</td>
                                        <td className="px-4 py-2">{product.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600 mt-4">Loading...</p>
            )}
        </div>
    );
};

export default UserDetail;
