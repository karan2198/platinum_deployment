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

const SalesDashboard = () => {
    const tableData = [
        ['Serial','Month ' , 'New Warm','Hot','Category','Estimated ','Subscription','State','Service','Closure','Terms &Conditions' ,'Comment'  ],
        ['1', 'January',"","","","","","","","","","",""],
        ['2','February' ,"","","","","","","","","","",""],
        ['3','March', "","","","","","","","","","",""],
        ['4', 'April', "","","","","","","","","","",""],
        ['5', 'May', "","","","","","","","","","",""],
        ['6',  'June',"","","","","","","","","","",""],
        ['7', 'July',"","","","","","","","","","",""],
        ['8','August', "","","","","","","","","","",""],
        ['9','September', "","","","","","","","","","",""],
        ['10','October', "","","","","","","","","","",""],
        ['11','November', "","","","","","","","","","","" ],
        ['12',   'December',"","","","","","","","","","",""],
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
                        <div className="col-lg-12 " style={{textAlign:'center', marginBottom: '15px' }}>
                            <div className="dashboard_title_area">
                                <h3>RM - Sales Dashboard</h3>

                            </div>
                        </div>
                        <div className="dashboard__content bgc-f7">
                            <div className="row ">
                                <div className="col-lg-12">
                                    <DboardMobileNavigation />
                                </div>
                                {/* End .col-12 */}


                                <div >

                                    <div>
                                        <table style={{border:'1px solid black'}}>
                                            <tbody style={{border:'1px solid black'}}>
                                                {tableData.map((row, rowIndex) => (
                                                    <tr key={rowIndex} style={{border:'1px solid black'}} >
                                                        {row.map((cellData, cellIndex) => (
                                                            <td key={cellIndex} style={{border:'1px solid black',height:'50px',width:'90px',textAlign:'center',}}>{cellData}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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

                </div>
            </div>
            {/* dashboard_content_wrapper */}
        </>
    );
};

export default SalesDashboard






