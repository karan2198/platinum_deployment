"use client"
import axios from "axios";
import React, { useState,useEffect } from "react";

const ChangePasswordForm = () => {
  // const [userData, setUserData] = useState(null)
  // const fetchUserData = async () => {
  //   const token = JSON.parse(localStorage.getItem('token'));
  //   console.log(token)
  //   try {
  //     const response = await axios.get('https://platinum.techpranee.com/client/api/v1/user/me', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setUserData(response.data.data);
    
  //     console.log(userData)
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // };
  // useEffect(() => {
  //   fetchUserData()
  // }, []);

  const [formData, setFormData] = useState({
    email:   '',
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  // const storedDataString = localStorage.getItem('data');
  // const storedData = storedDataString ? JSON.parse(storedDataString) : { email: '' };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.confirmNewPassword !== formData.newPassword) {
      return alert("Confirm Password does not match");
    }

    const token = localStorage.getItem('token')
    const emailuser = localStorage.getItem('email')
    //  console.log(token)
    try {
      const response = await fetch("https://platinum.techpranee.com/client/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email:emailuser,
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
        }),
      });

      if (response.ok) {
        alert("Password changed successfully!");
      } else {
        alert("Failed to change password");
      }
    } catch (error) {
      alert("Error occurred: " + error.message);
    }
  };

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      {/* Old Password input */}
      <div className="mb20">
        <label className="heading-color ff-heading fw600 mb10">Old Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Old Password"
          name="oldPassword"
          value={formData.oldPassword}
          onChange={handleChange}
          required
        />
      </div>

      {/* New Password input */}
      <div className="mb20">
        <label className="heading-color ff-heading fw600 mb10">New Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="New Password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          required
        />
      </div>

      {/* Confirm New Password input */}
      <div className="mb20">
        <label className="heading-color ff-heading fw600 mb10">Confirm New Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm New Password"
          name="confirmNewPassword"
          value={formData.confirmNewPassword}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit Button */}
      <div className="text-end">
        <button type="submit" className="ud-btn btn-dark">
          Change Password
          <i className="fal fa-arrow-right-long" />
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
