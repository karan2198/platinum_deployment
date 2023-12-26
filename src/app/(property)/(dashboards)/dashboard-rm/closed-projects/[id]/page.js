import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboardRm from "@/components/property/dashboard/SidebarDashboardRm";
import RecentActivities from "@/components/property/dashboard/dashboard-home/RecentActivities";
import TopStateBlock from "@/components/property/dashboard/dashboard-home/TopStateBlock";
import PropertyViews from "@/components/property/dashboard/dashboard-home/property-view";
import Link from "next/link";

export const metadata = {
  title: "Dashboard Home || Platinum Circle - Real Estate Concierge Services",
};

const ClosedSingleProject = ({ params }) => {
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
          <SidebarDashboardRm />
          <div className="dashboard__main pl0-md">
            <div className="dashboard__content bgc-f7">
              <div className="row ">
                <div className="col-lg-12">
                  <DboardMobileNavigation />
                </div>

              </div>


              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginTop: '30px' }}>
                  <span style={{ fontSize: '22px', marginTop: '20px', color: '#002D62', }}>Address : </span>  <span style={{ marginLeft: '50px' }}>abcd</span>
                </div>
                <div style={{ marginTop: '50px' }}>
                  <span style={{ fontSize: '22px', marginTop: '20px', color: '#002D62', }}>Address : </span>  <span style={{ marginLeft: '50px' }}>abcd</span>
                </div>
                <div style={{ marginTop: '50px', display: 'flex',marginLeft:'100px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '22px', color: '#002D62', }}>Service : </span>  
                    <input style={{ width: '16vw', borderRadius: '8px',marginRight:'20px' }} type="text" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '22px', color: '#002D62', }}>Service : </span>  
                    <input style={{ width: '16vw', borderRadius: '8px' }} type="text" />
                  </div>
                </div>
                <div style={{ marginTop: '50px' }}>
                  <span style={{ fontSize: '22px', marginTop: '20px', color: '#002D62', }}>Post Sales Service  : </span>  <span style={{ marginLeft: '50px' }}>abcd</span>
                </div>
                <div style={{ marginTop: '50px' }}>
                  <span style={{ fontSize: '22px', marginTop: '20px', color: '#002D62', }}>Closed By: </span>  <span style={{ marginLeft: '50px' }}>abcd</span>
                </div>
                <div style={{ marginTop: '50px' }}>
                <span style={{ fontSize: '22px', marginTop: '20px', color: '#002D62', }}>Final Notes : </span>  <text></text>
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
  );
};

export default ClosedSingleProject;