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

const ChangeEmail = () => {

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
                                <h2 style={{ color: 'rgb(0, 45, 98)', paddingLeft: '50px', paddingBottom: '30px' }}>Set New Email Id</h2>

                                <div className="innerContant" style={{ display: 'flex', flexDirection: 'column', width: '70vw', height: '750px', backgroundColor: 'white', borderRadius: '10px', paddingBottom: '30px', alignContent: 'flex-start', paddingLeft: '60px', paddingTop: '40px', paddingRight: '20px', paddingBottom: '20px' }}>
                                    <form>
                                        <div style={{ marginBottom: '20px' , display:'flex',flexDirection:'row',alignItems:'center',paddingBottom:'10px' }}>
                                            <label style={{ fontSize: '18px', color: '#333', marginBottom: '8px' ,paddingRight:'5%'}}>Old Email :</label>
                                            <input type="email" placeholder="xyz@xuz.com" style={{paddingLeft:'5px', width:'300px' , borderRadius:'10px',height:'40px',borderColor:'inherit'}}/>
                                        </div>

                                        <div style={{ marginBottom: '20px' ,display:'flex',flexDirection:'row',alignItems:'center' ,paddingBottom:'10px'}}>
                                            <label style={{ fontSize: '18px', color: '#333', marginBottom: '8px' ,paddingRight:'4.2%'}}>New Email :</label>
                                            <input type="email" placeholder="xyz@xuz.com" style={{paddingLeft:'5px', width:'300px', borderRadius:'10px',height:'40px',borderColor:'inherit'}} />
                                        </div>

                                        <div style={{ marginBottom: '20px' }}>
                        
                                            <input type="email" placeholder="Retype New Email Id" style={{paddingLeft:'5px', width:'300px', borderRadius:'10px',height:'40px',borderColor:'inherit',marginLeft:'14.5%'}}/>
                                        </div>

                                        <button type="submit" style={{ fontSize: '22px', color: '#002D62', marginTop: '20px', backgroundColor: '#C0C0C0', borderRadius: '10px', border: 'none', width: '10vw', paddingTop: '7px', paddingBottom: '7px' ,marginLeft:'14.5%'}}>Confirm</button>
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

export default ChangeEmail;