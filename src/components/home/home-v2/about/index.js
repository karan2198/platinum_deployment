"use client"
import { useState } from "react";
import Image from "next/image";
import VideoBox from "./VideoBox";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CalendlyIntegration from "@/components/calendly/CalendlyIntegration";
import LoginSignupModal from "@/components/common/login-signup-modal";

const About = () => {
  const [showCalendlyDialog, setshowCalendlyDialog] = useState(false)
  const [showLoginDialog, setshowLoginDialog] = useState(false)
  const [isLogin, setisLogin] = useState(false)

  const toggleDrawer = ()=> {
    if(isLogin === true){
      setshowCalendlyDialog(!showCalendlyDialog)
    }else{
      console.log('showing login model')
      // redirect to login or open login modal
      setshowLoginDialog(true)
    }
   
  };

  return (
    <div className="lower-section row mt40 mt0-md">
      <div className="position-relative">
        <div className="img-box-7">
          <Image
            width={1300}
            height={700}
            className="w-100 h-48 cover img-1"
            src="/images/about/about-2.png"
            alt="about"
          />
        </div>
        <div className="  img-box-8 position-relative">
          <Image
            width={193}
            height={193}
            className="img-1 spin-right"
            src="/images/about/element-1.png"
            alt="about"
          />
        </div>
        <VideoBox />
        <div className=" img-box-10 position-relative" style={{ top: "-100px", right: "-50px" }}>

            <Button className="ud-btn btn-thm" style={{backgroundColor:'rgb(235, 103, 83)',color:'white'}} onClick={()=>toggleDrawer()}>
              Book For Free Rm Call <i className="fal fa-arrow-right-long" style={{color :'white'}}></i>
            </Button>
            {/* </a> */}

              <Drawer
                anchor="bottom"
                open={showCalendlyDialog}
              >
                <CalendlyIntegration toggleDrawer={toggleDrawer}/>
              </Drawer>
              <Drawer
                anchor="bottom"
                open={showLoginDialog}
              >
            <LoginSignupModal setshowLoginDialog={setshowLoginDialog}/>
              </Drawer>
              
        </div>
      </div>
    </div>
  );
};

export default About;
