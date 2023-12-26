
import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboardRm from "@/components/property/dashboard/SidebarDashboardRm";
import RecentActivities from "@/components/property/dashboard/dashboard-home/RecentActivities";
import TopStateBlock from "@/components/property/dashboard/dashboard-home/TopStateBlock";
import PropertyViews from "@/components/property/dashboard/dashboard-home/property-view";
import Link from "next/link";

const ClientUrl = () => {
    const properties = [
        {
            Property: 'IRA Kollur',
            Stage: 'Final Negotiation',
            Status: 'Active'
        },
        {
            Property: 'IRA Kollur',
            Stage: 'Final Negotiation',
            Status: 'Active'
        },
        {
            Property: 'IRA Kollur',
            Stage: 'Final Negotiation',
            Status: 'Active'
        },
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
                <div className="dashboard dashboard_wrapper pr30 pr0-xl" >
                    <SidebarDashboardRm />
                    <div className="dashboard__main pl0-md">
                        <div className="dashboard__content bgc-f7">
                            <div className="row ">
                                <div className="col-lg-12">
                                    <DboardMobileNavigation />
                                </div>

                            </div>
                        
                            <h2 style={{  marginLeft: '20px' }}>Client Details </h2>
                        <div style={{
                           

                        }}>


                            <div style={{
                                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                                 borderRadius: '20px',
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', padding: '50px', borderRadius: '20px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                                        <h3>Property</h3>
                                        <h3>Stage</h3>
                                        <h3>Status</h3>
                                    </div>


                                    {
                                        properties.map((item, index) => {

                                            return (
                                                <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <span style={{fontSize:'16px',marginTop:'20px'}} >{item.Property}</span>
                                                    <span style={{fontSize:'16px',marginTop:'20px'}}>{item.Stage}</span>
                                                    <span style={{fontSize:'16px',marginTop:'20px'}}>{item.Status}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>


                                <div style={{ display:'flex',flexDirection:'column',  marginTop: '40px', backgroundColor: 'white', padding: '50px', borderRadius: '20px' }}>
                                    <span style={{fontSize:'16px',marginTop:'20px'}} >Stage : Legal Development</span>
                                    <span style={{fontSize:'16px',marginTop:'20px'}} >Detailed Project Report 1</span>
                                    <span style={{fontSize:'16px',marginTop:'20px'}} >Detailed Project Report 2</span>
                                </div>
                                <div style={{ marginTop: '40px', backgroundColor: 'white', borderRadius: '20px' }}>
                                    <div>
                                        <h3 style={{ marginTop: '50px', marginLeft: '50px' }}>Communication</h3>
                                        <div style={{ padding: '50px', display: 'flex', justifyContent: 'space-between', }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                                    <h3 style={{ marginTop: '-10px', marginLeft: '10px' }}>Relationship Manager</h3>
                                                    <h6>29 November 2023</h6>
                                                </div>
                                                <div>
                                                    <span style={{ backgroundColor: 'wheat', padding: '12px', paddingLeft: '20px', paddingRight: '50px', borderRadius: '8px' }}>Please find attached DPR 1 </span>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                                    <h6>29 November 2023</h6>
                                                    <h3 style={{ marginTop: '-10px', marginLeft: '10px' }}>Mr. John</h3>
                                                </div>
                                                <div>
                                                    <span style={{ backgroundColor: 'gray', padding: '12px', paddingLeft: '20px', paddingRight: '50px', borderRadius: '8px' }}>Thankyou ! I will review and and
                                                        revert.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  >
                                        <input style={{ width: '68vw', padding: '10px', borderRadius: '0 0 8px 8px' }} type="text" placeholder="Typle a Meessage" />

                                    </div>
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

                    export default ClientUrl;