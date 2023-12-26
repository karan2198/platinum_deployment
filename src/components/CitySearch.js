"use client";
import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import axios from "axios";
import { useEffect } from "react";

export default function Places() {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:process.env.NEXT_PUBLIC_API_KEY,
    libraries: ["places"],
  });
 //console.log(isLoaded)
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}
const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
   
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete(
    {
      restrictions: { country: "IN" }, 
    }
  );

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  //console.log(data)
  const platinumData=async()=>{
    const response = await axios.post("https://platinum.techpranee.com/client/api/v1/properties_collection/list");
    
    //console.log(response.data.data);
 } 
 useEffect(()=>{
   platinumData();

 },[])
  return (
   <div className="row justify-content-center align-items-center">

<Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
   </div>
  );
};