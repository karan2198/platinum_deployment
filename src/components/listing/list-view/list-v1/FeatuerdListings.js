"use client";

import { useData } from "@/context/DataContext";
import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle }) => {
  const {defaultData}=useData();
  //console.log(defaultData)
  //console.log(data)
  let storedUrl=""
  if (data && data.length > 0 && data[0].gallery && data[0].gallery.length > 0 && data[0].gallery[0].stored_url !== undefined) {
   
    storedUrl = data[0].gallery[0].stored_url;
    
} 

  return (
    <>

      {data.map((listing) => (
        <div
          className={` ${colstyle ? "col-sm-6 col-lg-6" : "col-sm-12"}  `}
          key={listing.id}
        >
          <div
            className={
              colstyle
                ? "listing-style1"
                : "listing-style1 listCustom listing-type"
            }
          >
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100  cover"
                style={{ height: "253px" }}

                src={listing?.gallery?.[0].stored_url}

                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {!listing.forRent && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    FEATURED
                  </div>
                )}
              </div>

              <div className="list-price">
                {listing.display_price}
                 {/* / <span>mo</span> */}
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                {/* <Link href={`/single-v4/${listing.id}`}>{listing.url_to_property}</Link> */}
                <Link href={`/single-v4/${listing.id}`}>{`${listing.property_subtype}  ${listing.property_type} in ${listing.city}`}</Link> 

              </h6>
              <p className="list-text">{listing.city}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="flaticon-bed" /> {listing.bedrooms} bed
                </a>
                <a href="#">
                  <span className="flaticon-shower" /> {listing.bathrooms} bath
                </a>
                <a href="#">
                  <span className="flaticon-expand" /> {listing.area} sqft
                </a>
              </div>
              <p className="list-text2">
                An exceptional exclusive five bedroom apartment for sale in this
                much sought after development in Knightsbridge.
              </p>
              <hr className="mt-2 mb-2" />
              <div className="list-meta2 d-flex justify-content-between align-items-center">
                <span className="for-what">For Rent</span>
                <div className="icons d-flex align-items-center">
                  <a href="#">
                    <span className="flaticon-fullscreen" />
                  </a>
                  <a href="#">
                    <span className="flaticon-new-tab" />
                  </a>
                  <a href="#">
                    <span className="flaticon-like" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
