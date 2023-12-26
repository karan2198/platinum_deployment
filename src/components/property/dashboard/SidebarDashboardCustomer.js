"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const SidebarDashboardCustomer = () => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showMenu, setShowMenu] =  React.useState(false)
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    setShowMenu(!showMenu)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sidebarItems = [
    {
      title: 'MAIN',
      items: [
        {
          href: '/dashboard-customer/dashboard-home',
          icon: 'flaticon-discovery',
          text: 'My Properties',
        },
        {
          href: '/dashboard-customer/finance-dashboard',
          icon: 'flaticon-chat-1',
          text: 'Finance Dashboard',
           subItems: [
            {
              href: '/dashboard-customer/my-plan',
              icon: 'your-icon',
              text: 'My Plan',
            },
            {
              href: '/dashboard-customer/billing-details',
              icon: 'your-icon',
              text: 'Billing Details',
            },
            // {
            //   href: '/dashboard-customer/change-plan',
            //   icon: 'your-icon',
            //   text: 'Change Plan',
            // },
            // {
            //   href: '/dashboard-my-profile',
            //   icon: 'flaticon-user',
            //   text: 'My Profile',
            // },
            {
              href: '/dashboard-customer/change-account-details',
              icon: 'your-icon', 
              text: 'Change Account Details',
            },
            // {
            //   href: '/dashboard-customer/change-password',
            //   icon: 'your-icon', 
            //   text: 'Change Password',
            // },
            // {
            //   href: '/dashboard-customer/change-email',
            //   icon: 'your-icon', 
            //   text: 'Change Email',
            // },
            // {
            //   href: '/dashboard-customer/change-contact',
            //   icon: 'your-icon', 
            //   text: 'Change Contact',
            // },
            {
              href: '/dashboard-customer/my-payments',
              icon: 'your-icon', 
              text: 'My Payments',
            },
          ],
        },
      ],
    },
    {
      items: [
        {
          href: '/dashboard-customer/dashboard-my-profile',
          icon: 'flaticon-user',
          text: 'My Profile',
        },
        {
          href: '/dashboard-customer/logout',
          icon: 'flaticon-logout',
          text: 'Logout',
        },
      ],
    },
  ];

  return (
    <div className="dashboard__sidebar d-none d-lg-block " style={{marginTop:'160px',zIndex:999}} >
      <div className="dashboard_sidebar_list">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="sidebar_list_item">
                {item.subItems ? (
                  <div>
                    <Button
                      id={`menu-${item.text.toLowerCase().replace(' ', '-')}`}
                      aria-controls={`menu-${item.text
                        .toLowerCase()
                        .replace(' ', '-')}`}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick} 
                      className={`items-center ${
                        pathname === item.href ? '-is-active' : ''
                      }`}
                      style={{color:'black',marginLeft:'13px',fontFamily:''}}
                    >
                      <i  style={{fontSize:'18px'}} className={`${item.icon} mr15`}  />
                      <h6 style={{fontSize:'13px'}}>{item.text}</h6>
                    </Button>
                    {/* <Menu
                      id={`menu-${item.text.toLowerCase().replace(' ', '-')}`}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    > */}
                      <div  style={{ display: showMenu ? 'block' : 'none'}}>
                        {item.subItems.map((subItem, subIndex) => (
                        <MenuItem key={subIndex} onClick={handleClose}>
                          <Link href={subItem.href} > 
                          <i className={`${item.icon} mr15`} />
                            {subItem.text}</Link>
                        </MenuItem>
                      ))}
                      </div>
                    {/* </Menu> */}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`items-center ${
                      pathname === item.href ? '-is-active' : ''
                    }`}
                    
                  >
                    <i className={`${item.icon} mr15`} />
                    {item.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboardCustomer;
