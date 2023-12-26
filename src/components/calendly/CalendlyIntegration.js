"use client"
import { useEffect, useState } from 'react';
import Script from 'next/script';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';

import { deepOrange, deepPurple } from '@mui/material/colors';
import { RxCross1 } from "react-icons/rx";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



const CalendlyIntegration = ({toggleDrawer}) => {
  const users = [
    { username: 'ankitraj7762/demo1', name: 'Ankit Raj' },
    { username: 'sajan7762999/meet', name: 'Sajan' },
  ];
  const [scriptLoaded, setscriptLoaded] = useState(false)
  const [selectedUser, setSelectedUser] = useState('ankitraj7762/demo1');
  const [delayLoading, setdelayLoading] = useState(true)
 const [cross,setCross]=useState(true)

  // ... (existing code)

  const handleCloseButtonClick = () => {
    toggleDrawer()
  //  setCross(false); // Reset selectedUser to close the Calendly widget
  };


  useEffect(() => {
    const script = document.createElement('script');
    const loadCalendlyScript = () => {
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        console.log("script  loaded")
        setTimeout(() => {
          setdelayLoading(false)
        }, 2000);
      };
      document.head.appendChild(script);
    };
    loadCalendlyScript();
    return () => {
      console.log("removig calendly script")
      document.head.removeChild(script);
    };
  }, []);

  const handleUserClick = (username) => {
    setSelectedUser(username);
    // loadingSkl();
  };
  // const loadingSkl=async()=>{
  //       const res=await axios.get("https://calendly.com/ankitraj7762/demo1");

  //       //console.log(res.status)
  // }

  return (
   <div>
    <div style={{ display: 'flex', flexDirection: selectedUser !== '' ? 'row-reverse' : 'column', alignItems: 'center', height: cross ? '100vh' : '0vh' }}>
     <h3  onClick={handleCloseButtonClick} style={{height:'50px',width:'50px',marginTop:'-580px',marginRight:'20px'}}><RxCross1 /></h3>
       
      <div style={{ marginRight: '30px', marginBottom: '20px', display: 'flex', flexDirection: selectedUser === '' ? 'row' : 'column' }}>
        {users.map((user, index) => ( 
          <div style={{ borderRadius: '20px', display: 'flex' }} key={index}>
            <button key={index} onClick={() => handleUserClick(user.username)} style={{ margin: '10px',marginLeft:'0px', backgroundColor:user.username===selectedUser?'gray': 'black', padding: '12px', borderRadius: '30px', display: 'flex', width: '210px', maxHeight: '90px' }}>
              <Stack direction="row" spacing={2} style={{display:'flex', height: '90px', marginRight: '12px', justifyContent: 'center',alignItems:'center',marginTop:'-15px' }}>
                <Avatar sx={{ bgcolor: deepOrange[500] }} style={{ height: '50px', width: '50px', alignSelf: 'center' }}>{user.name[0]}</Avatar>
              </Stack>

              <div>
                <h6 style={{ color: 'white', textAlign: 'left', marginBottom: '0px',marginTop:'-7px' }}>{user.name}</h6>
                <p style={{ color: 'white', textAlign: 'left', margin: '0px 0',fontSize:'10px' }}>Real estate agent with a proven track record</p>
                <p style={{ color: 'white', textAlign: 'left', margin: '0px 0',fontSize:'10px' }}>Experience: 10 years</p>
              </div>


            </button>
          </div>
        ))}
      </div>
      {delayLoading === true && <>
      <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={delayLoading}
>
  <CircularProgress color="inherit" />
</Backdrop></>}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {users.map((user, index) => (
          <div key={index}>
<div  style={{ display: selectedUser === user.username ? 'block' : 'none', margin: '0 20px' }}>
 <div className="calendly-inline-widget" data-url={`https://calendly.com/${user.username}`} style={{ minWidth: '1200px', height: '700px' }} />
            </div>
          </div>
        ))}
      </div>
       
    </div>
   </div>
  );
};

export default CalendlyIntegration;

