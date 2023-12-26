
"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useData } from "@/context/DataContext";

const RecentProperty = () => {
  const { sharedData } = useData();
  const [defaultData1, setDefaultData1] = useState([]);
  const userLoggedIn = true;

  const topFiveData = async () => {
    try {
      const response = await axios.post(
        "https://platinum.techpranee.com/client/api/v1/properties_collection/list",
        {
          query: {},
          options: {
            collation: "",
            sort: "",
            populate: "",
            projection: "",
            lean: false,
            leanWithId: true,
            offset: 0,
            page: 1,
            limit: 5,
            pagination: true,
            useEstimatedCount: false,
            useCustomCountFn: false,
            forceCountFn: false,
            read: {},
            options: {},
          },
          isCountOnly: false,
        }
      );

      const data = response.data;
      setDefaultData1(data.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (sharedData.length === 0) {
      topFiveData();
    } else {
      setDefaultData1(sharedData);
    }
  }, [sharedData]);

  const blurStyle = {
    backdropFilter: 'blur(500px)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  };
  //console.log(defaultData1);

  return (
    <>
      <div className="">
        {
          userLoggedIn ? defaultData1.slice(0, 5).map((listing, index) => (
            <div key={listing.id}>

              <Link href={`/single-v1/${listing.id}`} legacyBehavior>
                <a>
                  <div className="list-news-style d-flex align-items-center mb20">
                    <div className="news-img flex-shrink-0">
                      <Image
                        width={90}
                        height={80}
                        className="w-full h-full cover"
                        src={listing.gallery && listing.gallery[0] ? listing.gallery[0].stored_url : 'fallback_image_url'}
                        alt="listing image"
                      />

                    </div>
                    <div className="news-content flex-shrink-1 ms-3">
                      <h5 className="title mb0">
                        {listing.display_price} <span className="fz15">INR</span>
                      </h5>
                      <p className="new-text mb0 fz14">House on the Northridge</p>
                      <div className="list-meta">
                        <a href="#" className="me-2">
                          <span className="flaticon-bed pe-1" /> {listing.bedrooms}
                        </a>
                        <a href="#" className="me-2">
                          <span className="flaticon-shower pe-1" /> {listing.bathrooms}
                        </a>
                        <a href="#">
                          <span className="flaticon-expand pe-1" /> {listing.area}
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

            </div>
          )) : defaultData1.slice(0, 5).map((listing, index) => (

            (index == 0 || index == 1) ? <div style={blurStyle} key={listing.id}>

              <Link href={`/single-v1/${listing.id}`} legacyBehavior>
                <a>
                  <div className="list-news-style d-flex align-items-center mb20">
                    <div className="news-img flex-shrink-0">
                      <Image
                        width={90}
                        height={80}
                        className="w-full h-full cover"
                        src="/images/home/apihome.jpg" // Update with your image source
                        alt="listing image"
                      />
                    </div>
                    <div className="news-content flex-shrink-1 ms-3">
                      <h5 className="title mb0">
                        {listing.display_price} <span className="fz15">INR</span>
                      </h5>
                      <p className="new-text mb0 fz14">House on the Northridge</p>
                      <div className="list-meta">
                        <a href="#" className="me-2">
                          <span className="flaticon-bed pe-1" /> {listing.bedrooms}
                        </a>
                        <a href="#" className="me-2">
                          <span className="flaticon-shower pe-1" /> {listing.bathrooms}
                        </a>
                        <a href="#">
                          <span className="flaticon-expand pe-1" /> {listing.area}
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

            </div> : "login"




          ))
        }
      </div>
    </>
  );
};

export default RecentProperty;
