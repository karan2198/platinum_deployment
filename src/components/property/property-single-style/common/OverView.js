import { useData } from "@/context/DataContext";
import listings from "@/data/listings";
import React from "react";


const OverView = ({id}) => {
  const { defaultData}=useData();
 
  
    // //console.log(defaultData,"ingallery")
    const data = defaultData.filter((elm) => elm.id == id)[0] || listings[0];
    // //console.log(data.gallery)
  
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Bedroom",
      value: data.bedrooms,
    },
    {
      icon: "flaticon-shower",
      label: "Bath",
      value: data.bathrooms,
    },
    {
      icon: "flaticon-event",
      label: "Year Built",
      value: data.posted_on,
    },
    {
      icon: "flaticon-garage",
      label: "Garage",
      value: "2",
      xs: true,
    },
    {
      icon: "flaticon-expand",
      label: "Sqft",
      value: data.area,
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "Property Type",
      value: data.property_type,
    },
  ];
  
 
  return (
    <>
      {overviewData.map((item, index) => (
        <div
          key={index}
          className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}
        >
          <div className="overview-element d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
