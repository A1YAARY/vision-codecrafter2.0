import React, { useState } from "react";
// import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: 3
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:3000/api/user/register', {
        "name": formData.name,
        "balance": 10000,
        "email": formData.email,
        "password": formData.password,
        "dmat_acc_no": formData.dmat,
        "pan": formData.pan,
        "gender": formData.gender,
        "phone": formData.phone
      }, {
        withCredentials: true
      });
      
      setSuccess('Signup Successful!');
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        role: 3,
        dmat: "",
        pan: "",
        gender: ""
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Signup Failed');
      setTimeout(() => setError(null), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center lg:bg-[url('/src/assets/bgimage2.svg')]">
      {/* {success && (
        <div className="fixed top-0 left-0 right-0 bg-green-600 text-white text-center text-2xl py-4 z-50 animate-pulse">
          {success}
        </div>
      )}
      {error && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center text-2xl py-4 z-50 animate-pulse">
          {error}
        </div>
      )} */}
      
      <div className="flex w-4/12  max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            Welcome to VisionInvest
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-sm"
            placeholder="Enter Your Full Name"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-sm"
            placeholder="Enter Mobile Number"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-sm"
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-sm"
            placeholder="Enter Password"
            required
          />
        </div>
        <div>
          <label htmlFor="dmat" className="block mb-2 text-sm font-medium text-gray-700">
            DMAT Account Number
          </label>
          <input
            type="text"
            name="dmat"
            id="dmat"
            value={formData.dmat}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-sm"
            placeholder="Enter DMAT Account Number"
            required
          />
        </div>
        <div>
          <label htmlFor="pan" className="block mb-2 text-sm font-medium text-gray-700">
            PAN Number
          </label>
          <input
            type="text"
            name="pan"
            id="pan"
            value={formData.pan}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-sm"
            placeholder="Enter PAN Number"
            required
          />
        </div>
        <div>
          <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-sm"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition"
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Already Have An Account?{" "}
            <a href="/" className="text-orange-500 hover:underline font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;