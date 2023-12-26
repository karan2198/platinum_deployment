"use client"
import React, { useState } from "react";
import { Link } from "next/link";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    username: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.phone=parseInt( formData.phone,10);
    formData.username=formData.email;
    try {
      const response = await axios.post(
        "https://platinum.techpranee.com/client/auth/register",
        formData
      );
      const respData=await response.data;
      setFormData({
        password: '',
        email: '',
        name: '',
        phone: '',
        username: '',
    
      })
      alert("successfully registered")
     
     
      //console.log("Registration successful:", response.data);

    } catch (error) {
      
      console.error("Registration failed:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
    
 
      <div className="mb25">
        <label className="form-label fw600 dark-color">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb25">
        <label className="form-label fw600 dark-color">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
     
      <div className="mb25">
        <label className="form-label fw600 dark-color">Mobile No.</label>
        <input
          type="number"
          name="phone"
          className="form-control"
          placeholder="Enter phone"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
  
      <div className="mb20">
        <label className="form-label fw600 dark-color">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      
    

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Create account <i className="fal fa-arrow-right-long" />
        </button>
      </div>
      {/* Other UI elements like Google, Facebook, Apple login buttons, and the Login link. */}
    </form>
  );
};

export default SignUp;
