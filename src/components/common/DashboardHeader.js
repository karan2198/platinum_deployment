"use client";

import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
const DashboardHeader = () => {

  const pathname = usePathname();

  const menuItems = [
    {
      title: "MAIN",
      items: [
        {
          icon: "flaticon-discovery",
          text: "Dashboard",
          href: "/dashboard-home",
        },
        {
          icon: "flaticon-chat-1",
          text: "Message",
          href: "/dashboard-message",
        },
      ],
    },
    {
      title: "MANAGE LISTINGS",
      items: [
        {
          icon: "flaticon-new-tab",
          text: "Add New Property",
          href: "/dashboard-add-property",
        },
        {
          icon: "flaticon-home",
          text: "My Properties",
          href: "/dashboard-my-properties",
        },
        {
          icon: "flaticon-like",
          text: "My Favorites",
          href: "/dashboard-my-favourites",
        },
        {
          icon: "flaticon-search-2",
          text: "Saved Search",
          href: "/dashboard-saved-search",
        },
        { icon: "flaticon-review", text: "Reviews", href: "/dashboard-review" },
      ],
    },
    {
      title: "MANAGE ACCOUNT",
      items: [
        {
          icon: "flaticon-protection",
          text: "My Package",
          href: "/dashboard-my-package",
        },
        {
          icon: "flaticon-user",
          text: "My Profile",
          href: "/dashboard-my-profile",
        },
        { icon: "flaticon-exit", text: "Logout", href: "/login" },
      ],
    },
  ];

  return (
    <>

      <header  className="header-nav blue-box nav-homepage-style light-header  menu-home4 main-menu  " style={{height:'140px',position:'fixed'}}>
        <div style={{ backgroundColor: '#041E42', height: '70px', }} >
          <div className="container-fluid d-flex justify-content-end align-items-center ">
            <div className="h2 d-flex   align-items-end text-light" style={{marginTop:'30px'}}>
             
              <h5 className="text-light"> <IoSettingsOutline />Preferences</h5>
            </div>
          </div>
        </div>
        <nav className="posr" style={{ backgroundColor: '#002D62',height:'70px'}}>
          <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-start d-flex align-items-center">
                  <div className="dashboard_header_logo position-relative me-2 me-xl-5" style={{ marginTop: '-60px', }}>
                    <Link className="logo" href="">
                      <Image
                        width={120}
                        height={120}
                       style={{borderRadius:'20px'}}
                        src="/images/platinum_circle_A-1.png"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  {/* End Logo */}

                  <a
                    className="dashboard_sidebar_toggle_icon text-thm1 vam"
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#SidebarPanel"
                    aria-controls="SidebarPanelLabel"
                  >
                    <Image
                      width={25}
                      height={9}
                      className="img-1"
                      src="/images/dark-nav-icon.svg"
                      alt="humberger menu"
                    />
                  </a>
                </div>
              </div>
              {/* End .col-auto */}

              <div className="d-none d-lg-block col-lg-auto">
                {/* <MainMenu /> */}
                {/* End Main Menu */}
              </div>
              {/* End d-none d-lg-block */}

              <li className="container-fluid d-flex justify-content-end align-items-center text-light" style={{marginTop:'-50px'}}>
                <Link className="text-center " href="/">
                  <div className="text-light">
                    <h5 className="text-light" style={{border:'3px solid wheat', padding:'8px'}}> Back To Home</h5>
                  </div>
                </Link>
              </li>
              <div className="col-12 col-lg-auto">
                <div className="text-center text-lg-end header_right_widgets">
                  <ul className="mb0 d-flex justify-content-center justify-content-sm-end p-0">
                    {/* End email box */}

                    {/* <li className="d-none d-sm-block">
                      <a className="text-center mr20 notif" href="#">
                        <span className="flaticon-bell" />
                      </a>
                    </li> */}
                    {/* End notification icon */}

                    <li className=" user_setting">
                      {/* <div className="dropdown">
                        <a className="btn" href="#" data-bs-toggle="dropdown">
                          <Image
                            width={44}
                            height={44}
                            src="/images/resource/user.png"
                            alt="user.png"
                          />
                        </a>
                        <div className="dropdown-menu"> */}
                      {/* <div className="user_setting_content">
                            {menuItems.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                <p
                                  className={`fz15 fw400 ff-heading ${
                                    sectionIndex === 0 ? "mb20" : "mt30"
                                  }`}
                                >
                                  {section.title}
                                </p>
                                {section.items.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    className={`dropdown-item ${
                                      pathname == item.href ? "-is-active" : ""
                                    } `}
                                    href={item.href}
                                  >
                                    <i className={`${item.icon} mr10`} />
                                    {item.text}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div> */}
                      {/* </div> */}
                      {/* </div> */}
                    </li>
                    {/* End avatar dropdown */}
                  </ul>
                </div>
              </div>
              {/* End .col-6 */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* DesktopSidebarMenu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="SidebarPanel"
        aria-labelledby="SidebarPanelLabel"
      >
        <SidebarPanel />
      </div>
      {/* Sidebar Panel End */}
    </>
  );
};

export default DashboardHeader;
