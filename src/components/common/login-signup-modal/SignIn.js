"use client"
import Appbar from "@/components/googleauth/Appbar";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",

  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://platinum.techpranee.com/client/auth/login_without_2fa",
        formData
      );

      const respData = await response.data;

       // Check if the response indicates an error
    if (respData.error) {
      // Check if the error is due to invalid credentials
      if (respData.error.code === 'INVALID_CREDENTIALS') {
        alert("Invalid username or password. Please try again.");
      } else {
        alert("Login failed. Please try again later.");
      }
      return;
    }

      localStorage.setItem("token", respData.data.token);
      localStorage.setItem("email", respData.data.email);
      router.push('/dashboard-customer/dashboard-home');
      console.log(respData)
      setFormData({
        username: "",
        password: ""
      })



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
          className="form-control"
          placeholder="Enter Email"
          required
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      {/* End email */}

      <div className="mb15">
        <label className="form-label fw600 dark-color">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {/* End Password */}

      <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
        <label className="custom_checkbox fz14 ff-heading">
          Remember me
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
        </label>
        <a className="fz14 ff-heading" href="#">
          Lost your password?
        </a>
      </div>
      {/* End  Lost your password? */}

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Sign in <i className="fal fa-arrow-right-long" />
        </button>
      </div>
      {/* End submit */}

      <div className="hr_content mb20">
        <hr />
        <span className="hr_top_text">OR</span>
      </div>

      {/* <div className="d-grid mb10">
        <button className="ud-btn btn-white" type="button">
          <i className="fab fa-google" /> <Appbar/>
        </button>
      </div> */}

      <p className="dark-color text-center mb0 mt10">
        Not signed up?{" "}
        <Link className="dark-color fw600" href="/register">
          Create an account.
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
