import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { price, eventName } = location.state || {}; 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    department: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { ...formData, price, eventName });
    alert("Registration successful! Details logged in the console.");
    navigate("/"); // Redirect back to home after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">{eventName} Payment</h1>
        <p className="text-lg mb-6">Price: ₹{price}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            placeholder="Mobile Number"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleInputChange}
            placeholder="College"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            placeholder="Department"
            className="w-full p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
