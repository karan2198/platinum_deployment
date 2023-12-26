"use client"
import axios from 'axios';
import { createContext, useContext, useState,useEffect } from 'react';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataContextProvider({ children }) {
  const [sharedData, setSharedData] = useState([]);
  
  const [defaultData, setDefaultData] = useState([]);
 
  const updateSharedData = (newData) => {
    setSharedData(newData);
  };
  const idData = async () => {
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
            limit: 25,
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
      setDefaultData(data.data.data);
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
   idData();
  }, []);

  return (
    <DataContext.Provider value={{ sharedData, updateSharedData,defaultData}}>
      {children}
    </DataContext.Provider>
  );
}
