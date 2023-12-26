import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboardRm from "@/components/property/dashboard/SidebarDashboardRm";
import RecentActivities from "@/components/property/dashboard/dashboard-home/RecentActivities";
import TopStateBlock from "@/components/property/dashboard/dashboard-home/TopStateBlock";
import PropertyViews from "@/components/property/dashboard/dashboard-home/property-view";
import Link from "next/link";

function page() {

    const data = [
        {
            name: "Mr. X",
            department: "Client Finance",
            projects: "My home Bhuja",
            closure: "October 10, 2023",
            status: "Closed",
            service: "NIL"
        },
        {
            name: "Mr. X",
            department: "Client Finance",
            projects: "My home Bhuja",
            closure: "October 10, 2023",
            status: "Closed",
            service: "NIL"
        },
        {
            name: "Mr. X",
            department: "Client Finance",
            projects: "My home Bhuja",
            closure: "October 10, 2023",
            status: "Closed",
            service: "NIL"
        },]
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
                        
                            <h3 style={{ marginLeft: '20px' }}>Client Finance </h3>
                        <div style={{
                          

                        }}>


                            <div style={{
                                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                                borderRadius: '20px',
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', padding: '50px', borderRadius: '20px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                                        <h4>Client Finance</h4>
                                        <h4>Closed projects </h4>
                                        <h4>Closed projects </h4>
                                        <h4>Status</h4>
                                        <h4>Post sales service</h4>
                                    </div>


                                    {
                                        data.map((item, index) => {

                                            return (
                                                <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <span style={{fontSize:'16px',marginTop:'20px'}}>{item.name}</span>
                                                <span style={{fontSize:'16px',marginTop:'20px'}}>{item.department}</span>
                                                <span style={{fontSize:'16px',marginTop:'20px'}}>{item.projects}</span>
                                                    <span style={{fontSize:'16px',marginTop:'20px'}}>{item.status}</span>
                                                <span style={{fontSize:'16px',marginTop:'20px'}}>{item.service}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>



                            </div>
                        </div>

                        <div></div>
                        <div></div>
                        <div></div>
                        </div>
                        </div>
                        </div>
                        </div>
                        {/* dashboard_content_wrapper */}
                    </>
                    );
};

                    export default page