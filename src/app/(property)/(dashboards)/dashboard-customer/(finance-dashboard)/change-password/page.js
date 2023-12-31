"use client";

import React, { useState } from 'react';
import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboardCustomer from "@/components/property/dashboard/SidebarDashboardCustomer";
import RecentActivities from "@/components/property/dashboard/dashboard-home/RecentActivities";
import TopStateBlock from "@/components/property/dashboard/dashboard-home/TopStateBlock";
import PropertyViews from "@/components/property/dashboard/dashboard-home/property-view";
import { Directions, Style } from "@mui/icons-material";
import { Content } from "next/font/google";
import Link from "next/link";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ChangePassword = () => {

    const [formData, setFormData] = useState({
        email: '',
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });



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
                    email: emailuser,
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
        <>

            {/* Main Header Nav */}
            <DashboardHeader />
            {/* End Main Header Nav */}

            {/* Mobile Nav  */}
            <MobileMenu />
            {/* End Mobile Nav  */}

            {/* dashboard_content_wrapper */}
            <div className="dashboard_content_wrapper">
                <div className="dashboard dashboard_wrapper pr30 pr0-xl" >
                    <SidebarDashboardCustomer />
                    <div className="dashboard__main pl0-md">
                        <div className="dashboard__content bgc-f7" style={{ paddingTop: '40px' }}>
                            <div className="row ">
                                <div className="col-lg-12">
                                    <DboardMobileNavigation />
                                </div>

                            </div>


                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h2 style={{ color: 'rgb(0, 45, 98)', paddingLeft: '50px', paddingBottom: '30px' }}>Set New Password</h2>

                                <div className="innerContant" style={{ display: 'flex', flexDirection: 'column', width: '70vw', height: '750px', backgroundColor: 'white', borderRadius: '10px', paddingBottom: '30px', alignContent: 'flex-start', paddingLeft: '60px', paddingTop: '40px', paddingRight: '20px', paddingBottom: '20px' }}>
                                    <form style={{ paddingTop: '16%' }} onSubmit={handleSubmit}>
                                        <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '10px' }}>
                                            <label style={{ fontSize: '18px', color: '#333', marginBottom: '8px', paddingRight: '5%' }}>Old Password :</label>
                                            <input type="password" placeholder="xyz" name="oldPassword" value={formData.oldPassword}
                                                onChange={handleChange}
                                                required style={{ paddingLeft: '5px', width: '300px', borderRadius: '10px', height: '40px', borderColor: 'inherit' }} />
                                        </div>

                                        <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '10px' }}>
                                            <label style={{ fontSize: '18px', color: '#333', marginBottom: '8px', paddingRight: '4.2%' }}>New Password :</label>
                                            <input type="password" placeholder="xyz" name="newPassword"
                                                value={formData.newPassword}
                                                onChange={handleChange}
                                                required style={{ paddingLeft: '5px', width: '300px', borderRadius: '10px', height: '40px', borderColor: 'inherit' }} />
                                        </div>

                                        <div style={{ marginBottom: '20px' }}>

                                            <input type="password" placeholder="Retype New Password" name="confirmNewPassword"
                                                value={formData.confirmNewPassword}
                                                onChange={handleChange}
                                                required style={{ paddingLeft: '5px', width: '300px', borderRadius: '10px', height: '40px', borderColor: 'inherit', marginLeft: '18.1%' }} />
                                        </div>

                                        <button type="submit" style={{ fontSize: '22px', color: '#002D62', marginTop: '20px', backgroundColor: '#C0C0C0', borderRadius: '10px', border: 'none', width: '10vw', paddingTop: '7px', paddingBottom: '7px', marginLeft: '18.1%' }}>Confirm</button>
                                    </form>

                                </div>
                            </div>

                        </div>
                        {/* col-lg-12 */}
                    </div>
                    {/* End .row */}

                    {/* <div className="row">
           <TopStateBlock />
         </div> */}
                    {/* End .row */}

                    {/* <div className="row">
           <div className="col-xl-8">
             <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
               <div className="row">
                 <PropertyViews />
               </div>
             </div>
           </div>
           End col-xl-8

           <div className="col-xl-4">
             <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
               <h5 className="title fz17 mb25">Recent Activities</h5>
               <RecentActivities />
             </div>
           </div>
           End .col-xl-4
         </div> */}
                    {/* End .row */}
                </div>
                {/* End .dashboard__content */}

                {/* <Footer /> */}
            </div>
            {/* End .dashboard__main */}







            {/* dashboard_content_wrapper */}
        </>
    )
}

export default ChangePassword;