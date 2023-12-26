"use client"
import axios from "axios";
import React, { useState,useEffect,useMemo } from "react";


const PersonalInfo = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    street: "",
		city: "",
		state: "",
		country: "",
		postal_code: "",
  });

 

  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    console.log("data fetch")
    try {
      const response = await axios.get('https://platinum.techpranee.com/client/api/v1/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data.data);
      
      console.log(userData)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  const formData1 = useMemo(() => ({
    email: userData?.email || '',
    phone: userData?.phone || '',
    name: userData?.name || '',
    street: userData?.address?.street || '',
    city: userData?.address?.city || '',
    state: userData?.address?.state || '',
    country: userData?.address?.country || '',
    postal_code: userData?.address?.postal_code || ''
}), [userData]);


useEffect(() => {
    fetchUserData(); // Assuming fetchUserData is a function that fetches user data
}, []);

useEffect(() => {
    setFormData(formData1);
}, [formData1]);

    
  console.log(userData)
 
  console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      };
      formData.phone=parseInt(formData.phone,10)
      console.log(formData)
      const updatedDataForRequest = {
       
        email: formData.email,
        phone: parseInt(formData.phone,10),
        name: formData.name,
        address: {
          street: formData.street,
          city: formData.city,
          postal_code: parseInt(formData.postal_code),
          state: formData.state,
          country: formData.country,
        },
      };
      const response = await axios.put(
        'https://platinum.techpranee.com/client/api/v1/user/update-profile',
        updatedDataForRequest,
        config
      );

      alert('Profile updated');
      console.log('Updated data:', response.data);
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   "loginOTP": null, "email": "ankitraj7762999@gmail.com", 
//   "name": "ankit gupta", "userType": 4, "phone": 7762999954, "is_premium": false,
//    "username": "ankitraj7762999@gmail.com", "loginRetryLimit": 0, 
//    "createdAt": "2023-12-18T20:38:47.902Z", "updatedAt": "2023-12-20T04:58:14.256Z", 
//    "isDeleted": false, "isActive": true, "loginReactiveTime": null, 
//    "id": "6580add73717477f33de965b", 
//    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODBhZGQ3MzcxNzQ3N2YzM2RlOTY1YiIsInVzZXJuYW1lIjoiYW5raXRyYWo3NzYyOTk5QGdtYWlsLmNvbSIsImlhdCI6MTcwMzA0ODc2NSwiZXhwIjoxNzAzNjQ4NzY1fQ.xig7qljqcsDqUPzUHkjGG3OyG7z0vcKnE-LCYZ1iXq0"
// }

  return (
    <form className="form-style1" onSubmit={handleSubmit}>
      <div className="row">
        
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Your Name"
              required
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
              value={formData.phone}
              onChange={handleChange}
              name="phone"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
          </div>
        </div>
        {/* End .col */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
              value={formData?.name?.split(" ")[1]}
              onChange={handleChange}
              name="lastname"
            />
          </div>
        </div> */}
        {/* End .col */}

       
        {/* End .col */}

        
        {/* End .col */}

       
        {/* End .col */}

       
        {/* End .col */}

        <div className="col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Street
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="street"
              required
              value={formData.street}
              onChange={handleChange}
              
            />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              City
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              
            />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              State
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
              
            />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              
            />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
            Postal Code
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="postal_code"
              required
              value={formData.postal_code}
              onChange={handleChange}
              
            />
          </div>
        </div>
        
        {/* End .col */}

        {/* <div className="col-md-12">
          <div className="mb10">
            <label className="heading-color ff-heading fw600 mb10">
              About me
            </label>
            <textarea
              cols={30}
              rows={4}
              placeholder="There are many variations of passages."
              defaultValue={""}
            />
          </div>
        </div> */}
        {/* End .col */}

        <div className="col-md-12">
          <div className="text-end">
            <button type="submit" className="ud-btn btn-dark">
              Update Profile
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default PersonalInfo;
