
import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboardCustomer from "@/components/property/dashboard/SidebarDashboardCustomer";

import RecentActivities from "@/components/property/dashboard/dashboard-home/RecentActivities";
import TopStateBlock from "@/components/property/dashboard/dashboard-home/TopStateBlock";
import PropertyViews from "@/components/property/dashboard/dashboard-home/property-view";
import Link from "next/link";

export const metadata = {
  title: "Dashboard Home || Platinum Circle - Real Estate Concierge Services",
};

const ChangeAccountDetails = () => {

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
                <div style={{ marginTop: '30px' }}>
                  <span style={{ fontSize: '22px', marginTop: '20px', color: '#002D62', }}>UserName : </span>  <span style={{ marginLeft: '50px', border: '1px solid black', paddingTop: '20px', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '400px', borderRadius: '15px' }}>abcd</span>
                </div>



                <Link href="/dashboard-customer/change-email-id">
                  <button style={{ fontSize: '22px', color: '#002D62', marginTop: '50px', backgroundColor: '#C0C0C0', borderRadius: '10px', border: 'none', width: '20vw', paddingTop: '7px', paddingBottom: '7px' }}>Change Email id  </button>
                </Link>

                <Link href="/dashboard-customer/change-password">
                  <button style={{ fontSize: '22px', marginTop: '20px', color: '#002D62', marginTop: '50px', backgroundColor: '#C0C0C0', borderRadius: '10px', border: 'none', width: '20vw', paddingTop: '7px', paddingBottom: '7px' }}>Change Password </button>
                </Link>

                <Link href="/dashboard-customer/change-contact-number">
                  <button style={{ fontSize: '22px', marginTop: '20px', color: '#002D62', marginTop: '50px', backgroundColor: '#C0C0C0', borderRadius: '10px', border: 'none', width: '20vw', paddingTop: '7px', paddingBottom: '7px' }}>Change Contact Number</button>
                </Link>
                <Link href="/dashboard-customer/cancel-membership">
                  <button style={{ fontSize: '22px', marginTop: '20px', color: '#002D62', marginTop: '50px', backgroundColor: '#C0C0C0', borderRadius: '10px', border: 'none', width: '20vw', paddingTop: '7px', paddingBottom: '7px' }}>Cancel Membership</button>
                </Link>

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
  );
};

export default ChangeAccountDetails