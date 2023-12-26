"use client";

import listings from "@/data/listings";
import axios from "axios";
import React, { useState,useEffect } from "react";

const PropertyHeader = ({ id }) => {
  const [dataResponse, setDataResponse] = useState([])
  const singleData=async()=>{

    // const cityLoction = localStorage.getItem("cityname")
    // const lookingFor = localStorage.getItem("lookingFor")
    const response = await axios.post("https://platinum.techpranee.com/client/api/v1/properties_collection/list",
      {
        "query": {
          // "price": {
          //   "$gte": price.value.min,
          //   "$lte": price.value.ma
          // },
          // "city": cityLoction,
          // "property_type":lookingFor
        },
        "options": {

          "collation": "",
          "sort": "",
          "populate": "",
          "projection": "",
          "lean": false,
          "leanWithId": true,
          "offset": 0,
          "page": 1,
          "limit": 10,
          "pagination": true,
          "useEstimatedCount": false,
          "useCustomCountFn": false,
          "forceCountFn": false,
          "read": {},
          "options": {}
        },
        "isCountOnly": false

      });


    const datares = await response.data;
    if(datares && datares.data){

      setDataResponse(datares.data.data);
    }

  }
  useEffect(()=>{
    singleData();
  },[])
  // //console.log(dataResponse);
  // //console.log(listings)
  const data = dataResponse.filter((elm) => elm.id == id)[0];
  // //console.log(data)
  // const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
 
  return (
    <>
    
      {
        data  ? 
        <div className="d-flex flex-row">
          <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <h2 className="sp-lg-title">Equestrian Family Home</h2>
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm">
              {data.city}
             
            </p>
            <a
              className="ff-heading text-thm fz15 bdrr1 pr10 ml0-sm ml10 bdrrn-sm"
              href="#"
            >
              <i className="fas fa-circle fz10 pe-2" />
              For 
              {/* {data.forRent ? "rent" : "sale"} */}
            </a>
            <a
              className="ff-heading bdrr1 fz15 pr10 ml10 ml0-sm bdrrn-sm"
              href="#"
            >
              <i className="far fa-clock pe-2" />
              {/* {Number(new Date().getFullYear()) -
                Number(data.yearBuilding)}{" "} */}
             5 years ago
            </a>
            <a className="ff-heading ml10 ml0-sm fz15" href="#">
              <i className="flaticon-fullscreen pe-2 align-text-top" />
              8721
            </a>
          </div>
          <div className="property-meta d-flex align-items-center">
            <a className="text fz15" href="#">
              <i className="flaticon-bed pe-2 align-text-top" />
              {data.bedrooms} bed
            </a>
            <a className="text ml20 fz15" href="#">
              <i className="flaticon-shower pe-2 align-text-top" />
              {data.bathrooms} bath
            </a>
            <a className="text ml20 fz15" href="#">
              <i className="flaticon-expand pe-2 align-text-top" />
              {data.area} sqft
            </a>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className="col-lg-4">
        <div className="single-property-content ">
          <div className="property-action text-lg-end">
            <div className="d-flex mb20 mb10-md align-items-center justify-content-lg-end">
              <a className="icon mr10" href="#">
                <span className="flaticon-like" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-new-tab" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-share-1" />
              </a>
              <a className="icon" href="#">
                <span className="flaticon-printer" />
              </a>
            </div>
            <h3 className="price mb-0 mr-0">{data.display_price} INR</h3>
            <p className="text space fz15">
              {/* $
              {(
                Number(data.price.split("$")[1].split(",").join("")) / data.sqft
              ).toFixed(2)}
              /sq ft */}
            </p>
          </div>
        </div>
      </div> 
        </div>  :   "Loading...."
      
      }
    </>
  );
};

export default PropertyHeader;
