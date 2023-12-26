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

const MyPlan = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const Styles = {
        dropdown1: {
            position: 'relative',
            display: 'inline-block',
            paddingLeft:'100px'
        },
        dropdown2: {
            position: 'relative',
            display: 'inline-block',
            paddingLeft:'30.5%'
        },
        dropbtn: {
            backgroundColor: 'rgb(0, 45, 98)',
            color: 'white',
            paddingRight:'10px',
            paddingLeft:'50px',
            fontSize: '20px',
            border: 'none',
            cursor: 'pointer',
            borderRadius:'10px',

        },
        dropdownContent: {
            display: isDropdownVisible ? 'block' : 'none',
            position: 'absolute',
            backgroundColor: '#f9f9f9',
            minWidth: '160px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            // zIndex: 999,
        },
        dropdownLink: {
            display: 'block',
            padding: '10px 15px',
            textDecoration: 'none',
            color: '#333',
        },
        dropdownLinkHover: {
            backgroundColor: '#3498db',
            color: 'white',
        },

    };

    const toggleDropdown = () => {
        console.log('Toggle dropdown called');
        setDropdownVisible(!isDropdownVisible);
        console.log('isDropdownVisible:', isDropdownVisible);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setDropdownVisible(false);
    };

    const getButtonContent = () => {
        if (selectedOption) {
            return `${selectedOption}`;
        } else {
            return 'Select';
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
                        <div className="dashboard__content bgc-f7" style={{paddingTop:'40px'}}>
                            <div className="row ">
                                <div className="col-lg-12">
                                    <DboardMobileNavigation />
                                </div>

                            </div>


                            <div style={{ display: 'flex', flexDirection: 'column' ,marginTop:'100px' }}>
                                <h2 style={{color:'rgb(0, 45, 98)', paddingLeft:'50px', paddingBottom:'30px'}}>My Plan</h2>

                                <div className="innerContant" style={{ display: 'flex', flexDirection: 'column', width: '70vw', height: '750px', backgroundColor: 'white', borderRadius: '10px', paddingBottom: '30px' ,alignContent:'flex-start', paddingLeft:'60px',paddingTop:'40px',paddingRight:'20px',paddingBottom:'20px'}}>
                                    <div className="upper" style={{display: 'flex', flexDirection: 'column',  alignContent:'flex-start' , paddingBottom:'40px'}}>
                                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '30px' }}>
                                            <h5 style={{color:'rgb(0, 45, 98)'}} >Plan Details</h5>
                                            <h6 style={{ paddingLeft: '59%',color:'rgb(0, 45, 98)' }}>Status</h6>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column',paddingBottom:'15px'}}>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center'  }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <h5 style={{color:'rgb(0, 45, 98)'}}>Subscription Type :</h5>
                                                    <h6 style={{ padding: '20px', color:'rgb(0, 45, 98)' , fontWeight:'600'}}>Monthly Subscription : Rs 2000/mounth</h6>
                                                </div>
                                                <div> 
                                                    <h6 style={{ paddingLeft: '200px' , color:'rgb(0, 45, 98)' , fontWeight:'600'}}>Active( next renwal date 12-01-2024 )</h6>
                                                </div>
                                            </div>

                                            <div style={{ borderTop: "2px solid rgb(192, 192, 192) ", marginLeft: '-15px', marginRight: 20 ,paddingBottom:'30px'}}></div>

                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <h5 style={{color:'rgb(0, 45, 98)'}}>Services :</h5>
                                                    <div class="dropdown1" style={Styles.dropdown1}>
                                                        <button class="dropbtn" style={Styles.dropbtn} onClick={toggleDropdown}> {getButtonContent()}<ArrowDropDownIcon style={{paddingLeft:'10px',fontSize:'80px',height:'0.5em'}}/> </button>
                                                        <div class="dropdownContent" style={Styles.dropdownContent}>
                                                            <a style={Styles.dropdownLink} href="#" onClick={() => handleOptionSelect('Option 1')}>Option 1</a>
                                                            <a style={Styles.dropdownLink} href="#" onClick={() => handleOptionSelect('Option 2')}>Option 2</a>
                                                            <a style={Styles.dropdownLink} href="#" onClick={() => handleOptionSelect('Option 3')}>Option 3</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="dropdown2" style={Styles.dropdown2}>
                                                    <button class="dropbtn" style={Styles.dropbtn} onClick={toggleDropdown}> {getButtonContent()}<ArrowDropDownIcon style={{paddingLeft:'10px',fontSize:'80px',height:'0.5em'}}/></button>
                                                    <div class="dropdownContent" style={Styles.dropdownContent}>
                                                        <a style={Styles.dropdownLink} href="#" onClick={() => handleOptionSelect('Option 1')}>Option 1</a>
                                                        <a style={Styles.dropdownLink} href="#" onClick={() => handleOptionSelect('Option 2')}>Option 2</a>
                                                        <a style={Styles.dropdownLink} href="#" onClick={() => handleOptionSelect('Option 3')}>Option 3</a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div style={{ borderTop: "2px solid rgb(192, 192, 192) ", marginLeft: '-15px', marginRight: 20}}></div>
                                    </div>
                                    <div className="middle" style={{paddingBottom:'40px'}}>
                                        <div style={{paddingBottom:'30px'}}>
                                            <button className="changePlan" style={{color:'rgb(0, 45, 98)' ,background:'rgb(192, 192, 192)', borderRadius:'10px', padding:'5px 60px' , border:'none', fontWeight:'bold'}}>Change Plan</button>
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center',paddingBottom:'20px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                                                    <h5 style={{color:'rgb(0, 45, 98)'  , fontWeight:'600'}}>Monthly Subscription :</h5>
                                                    <h6 style={{ padding: '10px',color:'rgb(0, 45, 98)' , fontWeight:'600' }}>Rs 2000/mounth</h6>
                                                </div>
                                                <div style={{paddingLeft:'134px'}}>
                                                <button className="select" style={{color:'rgb(0, 45, 98)', background:'rgb(192, 192, 192)' , padding:'3px 30px' , borderRadius:'10px' , border:'none', fontWeight:'bold'}} >Select</button>
                                                </div>
                                                <div style={{paddingLeft:'22%'}}>
                                                <button className="submit" style={{color:'rgb(0, 45, 98)', background:'rgb(192, 192, 192)' , padding:'3px 30px' , borderRadius:'10px' , border:'none', fontWeight:'bold'}}>Submit</button>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', paddingBottom:'20px'}}>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                                                    <h5 style={{color:'rgb(0, 45, 98)' , fontWeight:'600'}}>Yearly Subscription :</h5>
                                                    <h6 style={{ padding: '10px',color:'rgb(0, 45, 98)' , fontWeight:'600' }}>Rs 5000/mounth</h6>
                                                </div>
                                                <div style={{paddingLeft:'150px'}}>
                                                <button className="select" style={{color:'rgb(0, 45, 98)', background:'rgb(192, 192, 192)' , padding:'3px 30px' , borderRadius:'10px' , border:'none', fontWeight:'bold'}}>Select</button>
                                                </div>
                                                <div style={{paddingLeft:'22%'}}>
                                                <button className="submit" style={{color:'rgb(0, 45, 98)', background:'rgb(192, 192, 192)' , padding:'3px 30px' , borderRadius:'10px' , border:'none',fontWeight:'bold'}}>Submit</button>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                                                    <h5 style={{color:'rgb(0, 45, 98)' , fontWeight:'600'}}>Yearly Subscription :</h5>
                                                    <h6 style={{ padding: '10px' , color:'rgb(0, 45, 98)' , fontWeight:'600'}}>Rs 9000/mounth</h6>
                                                </div>
                                                <div style={{paddingLeft:'150px'}}>
                                                <button className="select" style={{color:'rgb(0, 45, 98)', background:'rgb(192, 192, 192)' , padding:'3px 30px' , borderRadius:'10px' , border:'none',fontWeight:'bold'}}>Select</button>
                                                </div>
                                                <div style={{paddingLeft:'22%'}}>
                                                <button className="submit" style={{color:'rgb(0, 45, 98)', background:'rgb(192, 192, 192)' , padding:'3px 30px', borderRadius:'10px' , border:'none' , fontWeight:'bold'}}>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="last">
                                        <div>
                                            <button className="payment" style={{color:'white' , background:'rgb(0, 45, 98)', borderRadius:'10px' , padding:'3px 90px', border:'none', fontWeight:'bolder'}}>Pay Now</button>
                                        </div>
                                    </div>
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

export default MyPlan;