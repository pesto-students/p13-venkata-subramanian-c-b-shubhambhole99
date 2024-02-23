

import React, { useState } from 'react';

const BasicFormHandling = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const [arm,setar1m]=useState([]) 

  const handleInputChange = (event) => {
    // const { name, value } = event.target;
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setar1m([...arm,formData])
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicFormHandling;