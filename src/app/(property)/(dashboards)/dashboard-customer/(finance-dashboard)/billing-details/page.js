import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboardCustomer from "@/components/property/dashboard/SidebarDashboardCustomer";
import RecentActivities from "@/components/property/dashboard/dashboard-home/RecentActivities";
import TopStateBlock from "@/components/property/dashboard/dashboard-home/TopStateBlock";
import PropertyViews from "@/components/property/dashboard/dashboard-home/property-view";
import Link from "next/link";

const BillingDetails = () => {
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
                        <div className="dashboard__content bgc-f7">
                            <div className="row ">
                                <div className="col-lg-12">
                                    <DboardMobileNavigation />
                                </div>

                            </div>


                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h2>Billing Details</h2>

                                <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', }}>
                                    <div style={{ display: 'flex', marginTop: '30px' }}>
                                        <span style={{ fontSize: '22px', color: '#002D62', marginRight: '50px' }}>Subscription Date : </span>
                                        <input style={{ width: '16vw', borderRadius: '8px', marginRight: '20px' }} type="text" />
                                    </div>
                                    <div style={{ display: 'flex', marginTop: '30px' }}>
                                        <span style={{ fontSize: '22px', color: '#002D62', marginRight: '50px', }}>Subscription Type : </span>
                                        <input style={{ width: '16vw', borderRadius: '8px' }} type="text" />
                                    </div>
                                    <div style={{ display: 'flex', marginTop: '30px' }}>
                                        <span style={{ fontSize: '22px', color: '#002D62', marginRight: '50px', }}>Next Payment Date : </span>
                                        <input style={{ width: '16vw', borderRadius: '8px' }} type="text" />
                                    </div>
                                </div>
                                <div style={{ marginTop: '50px', backgroundColor: 'white', display: 'flex', flexDirection: 'column', borderRadius: '10px', padding: '15px' }}>
                                    <h5>Billing History</h5>
                                    <span style={{ fontSize: '20px', marginTop: '20px', color: '#002D62', }}>Your Membership will be cancelled on :  </span>
                                    <h5>27 December 2024</h5>
                                    <button style={{ fontSize: '22px', color: '#002D62', backgroundColor: '#C0C0C0', borderRadius: '10px', border: 'none', width: '20vw', paddingTop: '7px', paddingBottom: '7px' }}>Renew subscription </button>
                                </div>
                                <span style={{ fontSize: '17px', marginTop: '5px', color: '#002D62', }}>Subscription fees are billed at the beginning of each period and may take a few days after the
                                    billing date to appear on your account </span>
                                <div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                    <div style={{ marginLeft:'15px'}}>
                                        <div style={{ display: 'flex',justifyContent:'space-between',marginRight:'15px' }}>
                                            <span style={{ fontSize: '20px', marginTop: '20px', color: '#002D62', }}>01/12/23 </span>
                                            <span style={{ fontSize: '20px', marginTop: '20px', color: '#002D62', }}> 2000</span>
                                        </div>
                                        <span style={{ fontSize: '20px', marginTop: '20px', color: '#002D62', }}>xyz Service </span>
                                        <span style={{ fontSize: '20px', marginTop: '20px', color: '#002D62', }}>29/11/23 - 28/12/23  </span>
                                        <span style={{ fontSize: '20px', marginTop: '20px', color: '#002D62', }}> UPI s***@okicici  </span>
                                    </div>
                                    <br />
                                    <div style={{ marginLeft:'15px'}}>
                                        <div style={{ display: 'flex',justifyContent:'space-between',marginRight:'15px' }}>
                                            <span style={{ fontSize: '20px', marginTop: '20px', color: '#002D62', }}>01/12/23 </span>
                                            <span style={{ fontSize: '20px', marginTop: '20px', color: '#002D62', }}> 2000</span>
                                        </div>
                                        <span style={{ fontSize: '20px', marginTop: '20px', color: '#002D62', }}>xyz Service </span>
                                        <span style={{ fontSize: '20px', marginTop: '20px', color: '#002D62', }}>29/11/23 - 28/12/23  </span>
                                        <span style={{ fontSize: '20px', marginTop: '20px', color: '#002D62', }}> UPI s***@okicici  </span>
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
               <h4 className="title fz17 mb25">Recent Activities</h4>
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

export default BillingDetails