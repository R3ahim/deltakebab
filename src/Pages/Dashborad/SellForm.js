import React, { useState } from 'react'
import './SellForm.css'

function SellForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: 'male',
        newsletter: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
      };
    
  return (
    <div className="form-container">
    
      <form onSubmit={handleSubmit}>
        <label
         className='label'>
          First Name:
          <input
           className='input'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label className='label'>
          Last Name:
          <input
           className='input'
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label  className='label'>
          Tota Money:
          <input
           className='input'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label  className='label'>
          Total Cash:
          <input
          className='input'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

     
          

       
       

        <button className='button' type="submit">Submit</button>
      </form>
    </div>
          


  )
}

export default SellForm