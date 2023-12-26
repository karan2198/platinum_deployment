"use client";
import Select from "react-select";
import axios from "axios";
import { useEffect,useState } from "react";

const LookingFor = () => {
  const [inqueryType, setInqueryType] = useState([])

  // const inqueryType = [
  //   { value: "Apartments", label: "Apartments" },
  //   { value: "Bungalow", label: "Bungalow" },
  //   { value: "Houses", label: "Houses" },
  //   { value: "Office", label: "Office" },
  //   { value: "TownHome", label: "TownHome" },
  //   { value: "Villa", label: "Villa" },
  // ];

  const topFiveData=async()=>{
    const response=await axios.post('https://platinum.techpranee.com/client/api/v1/property_type_collection/list',
    {
      "query": {},
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
    }
    )
    const data=await response.data;

   const inqueryTypeOptions = data.data.data.map((item, index) => ({
      value: index,
      label: item.name
    }));
    setInqueryType(inqueryTypeOptions);
    // //console.log(data.data.data);
  }
  useEffect(()=>{
    topFiveData();

  },[])

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "none",
    }),
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  const [selectedOption, setSelectedOption] = useState(inqueryType[0]);

  const handleSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    localStorage.setItem("lookingFor",selectedOption.value)
  
  };


  return (
    <>
      <Select
       value={selectedOption}
       onChange={handleSelect}
        defaultValue={[inqueryType[0]]}
        name="colors"
        options={inqueryType}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isClearable={false}
      
        
      />
    </>
  );
};

export default LookingFor;
