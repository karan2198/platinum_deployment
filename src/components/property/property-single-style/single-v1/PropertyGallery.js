"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import listings from "@/data/listings";
import axios from "axios";
import React, { useEffect, useState } from "react";

const images = [
  {
    src: "/images/listings/listing-single-2.jpg",
    alt: "2.jpg",
  },
  {
    src: "/images/listings/listing-single-3.jpg",
    alt: "3.jpg",
  },
  {
    src: "/images/listings/listing-single-4.jpg",
    alt: "4.jpg",
  },
  {
    src: "/images/listings/listing-single-5.jpg",
    alt: "5.jpg",
  },
];

const PropertyGallery = ({id}) => {
  const [defaultData1, setDefaultData1] = useState([]);



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
            limit: 10,
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
  useEffect(()=>{
 topFiveData();
  },[])

//console.log(id)
//console.log(defaultData1)

  const data = defaultData1.filter((elm) => elm.id == id)[0] ;

  return (
    <>
   
      <Gallery>
        <div className="col-sm-6">
          <div className="sp-img-content mb15-md">
            <div className="popup-img preview-img-1 sp-img">
              <Item
                original={'/images/listings/listing-single-1.jpg'}
                thumbnail={'/images/listings/listing-single-1.jpg'}
                width={610}
                height={510}
              >
                {({ ref, open }) => (
                  <Image
                    src={'/images/listings/listing-single-1.jpg'}
                    width={591}
                    height={558}
                    ref={ref}
                    onClick={open}
                    alt="image"
                    role="button"
                    className="w-100 h-100 cover"
                  />
                )}
              </Item>
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6">
        
          <div className="row">
           
            { data && data.gallery && data.gallery.slice(0,4).map((image, index) => (
              <div className="col-6 ps-sm-0" key={index}>
                <div className="sp-img-content">
                  <div
                    className={`popup-img preview-img-${index + 2} sp-img mb10`}
                  >
                    <Item
                      original={image.stored_url}
                      thumbnail={image.src}
                      // width={250}
                      // height={270}
                    >
                      {({ ref, open }) => (
                       <div style={{height:'270px',width:'250px'}}>

                       <Image
                          width={270}
                          height={220}
                          className=" cover"
                          ref={ref}
                          onClick={open}
                          role="button"
                          src={image.stored_url}
                          alt={image.alt}
                        />
                       </div>
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Gallery>
    </>
  );
};

export default PropertyGallery;




