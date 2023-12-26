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

const DashboardHome = () => {
  const clientNames = [
  {cName:'Name of the Client A',href:'/clientUrl'},
   { cName:'Name of the Client B',href:'/clientUrl'},
    {cName:'Name of the Client C',href:'/clientUrl'},
    {cName:'Name of the Client D',href:'/clientUrl'},
    {cName:'Name of the Client E',href:'/clientUrl'}
  ];

  return (
    <>

      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* dashboard_content_wrapper */}
      <div className="dashboard_content_wrapper" >
        <div className="dashboard dashboard_wrapper pr30 pr0-xl">
          <SidebarDashboardRm />
          {/* End .dashboard__sidebar */}

          <div className="dashboard__main pl0-md">
                <div className="col-lg-12 " style={{marginLeft:'15px',marginBottom:'15px'}}>
                  <div className="dashboard_title_area">
                    <h3>Howdy, Ali! rm</h3>
                    
                  </div>
                </div>
            <div className="dashboard__content bgc-f7">
              <div className="row ">
                <div className="col-lg-12">
                  <DboardMobileNavigation />
                </div>
                {/* End .col-12 */}

            
                <div style={{ display: 'flex', flexDirection: 'column' }}>

                  {
                    clientNames.map((i,index) => {
                      return(

                       <div key={index} style={{marginTop:'25px'}}>
                         <Link
                        href={`/dashboard-rm/${i.href}`}>
                        <span style={{fontSize:'22px',marginTop:'20px',color:'#002D62',}}>{i.cName}</span>
                        </Link>
                       </div>
                      )
                    })
                  }
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

        </div>
      </div>
      {/* dashboard_content_wrapper */}
    </>
  );
};

export default DashboardHome;
